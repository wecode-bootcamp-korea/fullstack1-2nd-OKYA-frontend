import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartContainer from './CartContainer';
import EmptyCart from './EmptyCart';
import { ERROR_MESSAGES, CART_API } from '../../config';

const CartWrap = () => {
  const [cartItems, setCartItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('로그인 후 이용하실 수 있습니다.');
    }

    fetch(CART_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setCartItems(data.cartItems));
  }, []);

  const deleteItem = cartItemId => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('로그인 후 이용하실 수 있습니다.');
      return history.push('/login');
    }

    fetch(CART_API, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: cartItemId,
      }),
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(result => {
        if (result.message === ERROR_MESSAGES.invalidToken) {
          localStorage.removeItem('token');

          window.confirm(
            '안전한 서비스를 위하여 로그아웃 되었습니다. \n 다시 로그인 해주세요.'
          );
        }
      })
      .catch(err => console.error(err));

    fetch(CART_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setCartItems(data.cartItems));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartContainer cartItems={cartItems} deleteItem={deleteItem} />
      )}
    </>
  );
};

export default CartWrap;

import React, { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import styled from 'styled-components';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/data/CartData.json')
      .then(res => res.json())
      .then(data => {
        setCartItems(data.cartData);
      });
  }, []);

  return (
    <Container>
      <ContainerGridWrap>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartItem cartItems={cartItems} />
        )}
      </ContainerGridWrap>
    </Container>
  );
};

const ContainerGridWrap = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: 1fr;
  grid-column-gap: 1.25rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-column: 2 / span 12;
`;

export default Cart;

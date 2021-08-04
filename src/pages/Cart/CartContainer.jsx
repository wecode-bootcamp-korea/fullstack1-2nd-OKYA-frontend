import React from 'react';
import CartItems from './CartItems';
import OrderContainer from './OrderContainer';
import styled from 'styled-components';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const CartContainer = ({ cartItems, deleteItem }) => {
  return (
    <>
      <CartItemWrap>
        <CartHeader>
          <Header>장바구니</Header>
          <DotBtn>
            <BiDotsHorizontalRounded size="18" />
          </DotBtn>
        </CartHeader>
        {cartItems.map((cartItem, index) => {
          return (
            <CartItems key={index} {...cartItem} deleteItem={deleteItem} />
          );
        })}
      </CartItemWrap>
      <OrderContainer cartItems={cartItems} />
    </>
  );
};

const CartItemWrap = styled.div`
  grid-column: 1 / 8;
  color: #111;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const DotBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  text-align: center;
  background-color: transparent;

  &:hover {
    background-color: #eee;
  }
`;

export default CartContainer;

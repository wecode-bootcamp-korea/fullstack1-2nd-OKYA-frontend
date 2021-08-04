import React from 'react';
import styled from 'styled-components';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const EmptyCart = () => {
  return (
    <CartWrap>
      <p>장바구니가 비었습니다</p>
      <DotBtn>
        <BiDotsHorizontalRounded size="18" />
      </DotBtn>
    </CartWrap>
  );
};

const CartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / span 12;
  height: 100px;
  border-bottom: 1px solid #ccc;
  color: #111;

  p:first-child {
    font-size: 25px;
    font-weight: 700;
  }
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

export default EmptyCart;

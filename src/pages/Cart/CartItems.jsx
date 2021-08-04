import React, { useState } from 'react';
import styled from 'styled-components';

const CartItems = ({
  cartItemId,
  id,
  description,
  imageUrl,
  name,
  price,
  deleteItem,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(quantity => quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity <= 1) {
      return quantity;
    } else {
      setQuantity(quantity => quantity - 1);
    }
  };

  return (
    <CartItem>
      <ItemIamge>
        <Image src={imageUrl} alt="card" />
      </ItemIamge>
      <CartItemInfoWrap>
        <div>
          <ItemDesc>{name}</ItemDesc>
          <ItemDesc>{description}</ItemDesc>
        </div>
        <Price>
          <p>₩ {price.toLocaleString()}</p>
        </Price>
        <ItemOption>
          <HandleQty>
            <HandleQtyBtn onClick={decreaseQty}>-</HandleQtyBtn>
            <Qty>{quantity}</Qty>
            <HandleQtyBtn onClick={increaseQty}>+</HandleQtyBtn>
          </HandleQty>
          <Button onClick={() => deleteItem(cartItemId)}>삭제</Button>
          <Button>위시리스트 저장</Button>
        </ItemOption>
      </CartItemInfoWrap>
    </CartItem>
  );
};

const CartItem = styled.div`
  display: flex;
  padding: 40px 0;
  border-bottom: 1px solid #ccc;
`;

const CartItemInfoWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(1, fit-content(70px) [row-start] 40px [row-end]);
  grid-row-gap: 1.25rem;
  grid-column: 2 / span 6;
  width: 100%;
  line-height: 1.57;
`;

const ItemIamge = styled.div`
  margin-right: 16px;
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
`;

const ItemDesc = styled.p`
  &:first-child {
    font-size: 16px;
    font-weight: 700;
  }

  &:last-child {
    font-size: 14px;
  }
`;

const Price = styled.div`
  grid-column: 2;
  text-align: right;
  font-weight: 700;
`;

const ItemOption = styled.div`
  display: grid;
  grid-template-columns: 5.3125rem max-content auto;
  grid-row: 2;
  grid-column: 1/3;
`;

const HandleQty = styled.div`
  display: flex;
  align-items: center;
`;

const HandleQtyBtn = styled.button`
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: #eeeeee;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Qty = styled.div`
  margin-right: 10px;
`;

const Button = styled.button`
  margin-left: 1rem;
  border: none;
  background-color: transparent;
  text-align: left;
  font-size: 14px;
`;

export default CartItems;

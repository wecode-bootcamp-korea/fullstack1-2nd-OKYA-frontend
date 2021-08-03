import React from 'react';
import styled from 'styled-components';

const CartContainer = porps => {
  const arrQty = new Array(99).fill().map((e, i) => i + 1);

  const itemQtySelectOption = arrQty.map((qty, index) => (
    <option key={index} value="{qty}">
      {qty}
    </option>
  ));

  return (
    <>
      <CartItem>
        <ItemIamge>
          <Image src={porps.image_url} alt="card" />
        </ItemIamge>
        <CartItemInfoWrap>
          <ItemInfo>
            <div>
              <ItemDesc>{porps.name}</ItemDesc>
              <ItemDesc>{porps.description}</ItemDesc>
            </div>
          </ItemInfo>
          <Price>
            <p>₩ {porps.price.toLocaleString()}</p>
          </Price>
          <ItemOption>
            <SelectBox>
              <optgroup>{itemQtySelectOption}</optgroup>
            </SelectBox>
            <Button>삭제</Button>
            <Button>위시리스트 저장</Button>
          </ItemOption>
        </CartItemInfoWrap>
      </CartItem>
    </>
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

const ItemInfo = styled.div`
  // 이후 코드 추가할 부분
  /* display: flex;
  justify-content: space-between; */
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

const SelectBox = styled.select`
  padding: 0 1rem 0 1rem;
  width: 90%;
  border-radius: 50px;
  border-color: #e0e0e0;
  font-size: 14px;
`;

const Button = styled.button`
  margin-left: 1rem;
  border: none;
  background-color: transparent;
  text-align: left;
  font-size: 14px;
`;

export default CartContainer;

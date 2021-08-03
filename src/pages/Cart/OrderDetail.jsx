import React from 'react';
import styled from 'styled-components';
import { BiRightArrowAlt } from 'react-icons/bi';

const OrderDetail = () => {
  return (
    <>
      <OrderDetails>
        <OrderDetailParagraph>주문내역</OrderDetailParagraph>
        <OrderDesc>
          <p>전체 서비스비용</p>
          <p>
            이 금액에는 배송비가 포함되어 있지 않으며, 배송지에 따라 구매가
            불가할 수 있습니다
          </p>
        </OrderDesc>
        <TotalPrice>
          <p>총 주문금액</p>
          <p>₩ 10,000</p>
        </TotalPrice>
      </OrderDetails>
      <OrderButton>
        <p>결제하기</p>
        <ArrowBtn>
          <Arrow />
        </ArrowBtn>
      </OrderButton>
    </>
  );
};

const OrderDetails = styled.div`
  margin: 40px 0;
`;

const OrderDetailParagraph = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
`;

const OrderDesc = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
  font-size: 14px;

  p:last-child {
    text-align: right;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p:first-child {
    font-weight: 500;
  }

  p:last-child {
    font-size: 22px;
    font-weight: 700;
  }
`;

const OrderButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 2rem 1.5rem;
  width: 100%;
  background-color: #0058a3;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: #004b8d;
  }
`;

const ArrowBtn = styled.button`
  padding: 0 2px;
  border: none;
  border-radius: 10rem;
  background-color: #fff;
`;

const Arrow = styled(BiRightArrowAlt)`
  padding-top: 2px;
  font-size: 28px;
`;

export default OrderDetail;

import React from 'react';
import OrderDetail from './OrderDetail';
import Coupon from './Coupon';
import styled from 'styled-components';
import { RiExchangeFundsLine, RiLockLine } from 'react-icons/ri';

const OrderContainer = () => {
  return (
    <OrderItemContainer>
      <OrderDetail />
      <Coupon />
      <OrderInfoWrap>
        <OrderInfo>
          <RiExchangeFundsLine />
          <Paragraph>반품 정책 365일 이내에 제품 환불 가능</Paragraph>
        </OrderInfo>
        <OrderInfo>
          <RiLockLine />
          <Paragraph>SSL 데이터 암호화로 안전한 쇼핑</Paragraph>
        </OrderInfo>
      </OrderInfoWrap>
    </OrderItemContainer>
  );
};

const OrderItemContainer = styled.div`
  grid-column: 9 / 12;
  margin: 30px 0;
`;

const OrderInfoWrap = styled.div`
  margin-top: 100px;
`;

const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Paragraph = styled.p`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 700;
`;

export default OrderContainer;

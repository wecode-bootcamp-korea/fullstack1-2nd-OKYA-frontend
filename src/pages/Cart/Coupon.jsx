import React from 'react';
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Coupon = () => {
  return (
    <Detail>
      <summary>쿠폰입력</summary>
      <CouponInfo>
        <AiOutlineInfoCircle size="20" color="#0058a3" />
        <p>주문당 1개의 쿠폰만 사용할 수 있습니다.</p>
      </CouponInfo>
      <Input type="text" placeholder="쿠폰 코드 입력" />
      <Button>쿠폰 적용</Button>
    </Detail>
  );
};

// 키프레임 작업 중
// const Open = keyframes`
//   from {
//       opacity: 0;
//       margin-top: -10px;
//     }
//     to {
//       opacity: 1;
//       margin-top: 0;
//     }
// `;

// 키프레임 작업 중
const Detail = styled.details`
  /* animation: sweep 0.5s ease-in-out; */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #dfdfdf;
`;

const CouponInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const Button = styled.button`
  display: block;
  width: 30%;
  margin: 20px auto;
  padding: 15px 20px;
  border: 1px solid #dfdfdf;
  border-radius: 50px;
  background-color: transparent;
  font-weight: 700;
`;

export default Coupon;

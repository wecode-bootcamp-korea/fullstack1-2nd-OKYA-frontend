import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ModalLower2 = ({ toggleInnermodal }) => {
  return (
    <LowEntireWrapper>
      <LowWrapper1>
        <CloseButton>
          <AiOutlineArrowLeft onClick={toggleInnermodal} />
        </CloseButton>
        <span>모든 제품</span>
      </LowWrapper1>
      <LowerWrapper>
        <LowWrapper2>
          <span>지속가능한 제품</span>
        </LowWrapper2>
        <LowWrapper3>
          <Link to="/list">의자</Link>
          <span>가구</span>
          <span>홈스마트</span>
          <span>어린이 IKEA</span>
          <span>수납/정리</span>
          <span>주방가구</span>
          <span>텍스타일</span>
          <span>홈데코/장식품</span>
          <span>욕실</span>
          <span>아웃도어/야외용품</span>
          <span>조명</span>
          <span>러그/매트/데크</span>
        </LowWrapper3>
      </LowerWrapper>
    </LowEntireWrapper>
  );
};

const LowEntireWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  left: 1.1rem;
`;

const CloseButton = styled.button`
  display: absolute;
  margin-right: 1.3rem;
  width: 80px;
  background-color: white;
  border: 0;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const LowWrapper1 = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 4rem;
`;

const LowerWrapper = styled.div`
  position: relative;
  left: 6.5rem;
`;

const LowWrapper2 = styled.div`
  margin: 2rem 0;
  font-weight: bold;
  font-size: 0.875rem;
`;

const LowWrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  line-height: 2.7em;
`;

export default ModalLower2;

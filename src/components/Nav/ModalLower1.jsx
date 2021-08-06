import React from 'react';
import styled from 'styled-components';
import { ImEarth } from 'react-icons/im';
import { Link } from 'react-router-dom';

const ModalLower1 = ({ innertogglemodal }) => {
  return (
    <LowEntireWrapper>
      <LowWrapper1>
        <ToInnerModal onClick={innertogglemodal}>모든 제품</ToInnerModal>
        <span>디지털 쇼룸</span>
      </LowWrapper1>
      <LowWrapper2>
        <span>할인중</span>
        <span>신제품</span>
        <span>더 낮은 새로운 가격</span>
        <span>아이디어</span>
        <span>IKEA Live</span>
        <span>새로운 소식</span>
      </LowWrapper2>
      <LowWrapper3>
        <span>매장안내</span>
        <span>IKEA Family</span>
        <span>고객지원</span>
        <span>배송조회</span>
        <span>내 프로필</span>
      </LowWrapper3>
      <LowWrapper4>
        <select>
          <option value="" hidden>
            한국어
          </option>
          <option value="1">한국어</option>
          <option value="2">English</option>
        </select>
        <EarthWrapper>
          <ImEarth />
          <EarthTitle
            to={{
              pathname: 'https://www.ikea.com/',
            }}
            target="_blank"
          >
            국가 변경
          </EarthTitle>
        </EarthWrapper>
      </LowWrapper4>
    </LowEntireWrapper>
  );
};

const LowEntireWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  left: 7.5rem;
`;

const ToInnerModal = styled.div`
  cursor: pointer;
`;

const LowWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 4rem;
`;

const LowWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 2.5rem;
`;

const LowWrapper3 = styled.div`
  display: flex;
  margin-top: 1.3rem;
  flex-direction: column;
  font-size: 0.875rem;
  line-height: 2.2rem;
`;

const LowWrapper4 = styled.div`
  display: flex;
  margin-top: 2rem;
  select {
    border-radius: 50px;
    text-align-last: center;
    border: 1px solid #dfdfdf;
    width: 100px;
    height: 35px;
    font-weight: bold;
  }
`;
const EarthWrapper = styled.div`
  margin-left: 30px;
  padding: 0.5rem 0.7rem;
  width: 100px;
  height: 35px;
  border-radius: 50px;
  border: 1px solid #dfdfdf;
  color: #484848;
  font-weight: bold;
`;

const EarthTitle = styled(Link)`
  position: relative;
  margin-left: 5px;
  font-size: 0.8rem;
  top: -3px;
`;

export default ModalLower1;

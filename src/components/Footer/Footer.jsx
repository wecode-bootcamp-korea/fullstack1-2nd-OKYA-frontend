import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper>
      <IkeaFamilyWrapper>
        <IkeaFamilyTitle>IKEA Family</IkeaFamilyTitle>
        <IkeaFamilySubTItle>
          지금 IKEA Family에 무료로 가입하고 다양한 멤버 전용 혜택을 누리세요.
        </IkeaFamilySubTItle>
        <Link to="/signup">
          <IkeaFamilySignup>IKEA Family 가입하기</IkeaFamilySignup>
        </Link>
      </IkeaFamilyWrapper>
      <CustomerWrapper>
        <CustomerInquiry>고객문의</CustomerInquiry>
        <ul>
          <li>고객지원</li>
          <li>자주 묻는 질문</li>
          <li>문의하기</li>
          <li>배송조희</li>
          <li>교환환불</li>
          <li>품질보증</li>
          <li>제품리콜</li>
          <li>제품 구매 가이드</li>
          <li>피드백</li>
        </ul>
      </CustomerWrapper>
      <ShoppingWrapper>
        <Shopping>쇼핑하기</Shopping>
        <ul>
          <li>쇼핑하기</li>
          <li>전화주문</li>
          <li>IKEA for Business</li>
          <li>셀프 플래닝</li>
          <li>IKEA 모바일 앱</li>
          <li>제품 사용 팁/가이드</li>
          <li>결제 옵션</li>
          <li>기프트 카드</li>
        </ul>
      </ShoppingWrapper>
      <ServiceWrapper>
        <Service>서비스</Service>
        <ul>
          <li>IKEA 서비스</li>
          <li>배송 서비스</li>
          <li>조립 서비스</li>
          <li>주방 서비스</li>
          <li>욕실 서비스</li>
          <li>홈퍼니싱 플래닝 서비스</li>
          <li>인테리어 디자인 서비스</li>
          <li>바이백 서비스</li>
        </ul>
      </ServiceWrapper>
      <StoryWrapper>
        <Story>IKEA 이야기</Story>
        <ul>
          <li>브랜드 소개</li>
          <li>집에서의 삶</li>
          <li>지속가능한 생활</li>
          <li>뉴스</li>
          <li>채용정보</li>
        </ul>
      </StoryWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 150px;
  padding-top: 100px;
  height: 500px;
  background-color: #f5f5f5;
  li {
    line-height: 2.2rem;
    color: #484848;
    font-size: 0.85rem;
  }
`;

const IkeaFamilyWrapper = styled.div`
  margin-left: 150px;
  margin-right: 150px;
  width: 210px;
`;

const IkeaFamilyTitle = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.2rem;
`;
const IkeaFamilySubTItle = styled.p`
  margin-bottom: 20px;
  font-size: 0.875rem;
  line-height: 1.71429;
  color: #484848;
`;

const IkeaFamilySignup = styled.button`
  padding: 15px 30px;
  background-color: black;
  color: white;
  font-weight: 700;
  border: 0;
  border-radius: 20px;
`;

const CustomerWrapper = styled.div`
  margin-right: 130px;
`;

const CustomerInquiry = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
`;

const ShoppingWrapper = styled.div`
  margin-right: 130px;
`;

const Shopping = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
`;

const ServiceWrapper = styled.div`
  margin-right: 130px;
`;

const Service = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
`;

const StoryWrapper = styled.div`
  margin-right: 130px;
`;

const Story = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
`;

export default Footer;

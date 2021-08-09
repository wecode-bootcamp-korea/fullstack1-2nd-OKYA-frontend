import React from 'react';
import styled from 'styled-components';

const MainBanner = () => {
  return (
    <MainBannerWrap>
      <ImageContainer>
        <Image src="https://i.postimg.cc/pLsWWt3k/3.jpg" alt="main" />
      </ImageContainer>
      <DescContainer>
        <Title>매일 놀라운 가격을 만나보세요.</Title>
        <Desc>
          모두가 가격을 내릴 때 OKYA는 가격을 올립니다. 인터넷에서 최저가를 잘
          검색해보시고 구매하세요. 큰일납니다. <br /> 네이버에 검색하면 최저가
          다 나옵니다.
        </Desc>
        <Button>지금 보러가기</Button>
      </DescContainer>
    </MainBannerWrap>
  );
};

const MainBannerWrap = styled.div`
  display: flex;
  grid-column: 2 / span 12;
  margin-bottom: 70px;
`;

const ImageContainer = styled.div`
  width: 66%;
  height: 100%;
`;

const Image = styled.img`
  object-fit: cover;
`;

const DescContainer = styled.div`
  padding: 3rem;
  width: 33%;
  height: 99.6%;
  background-color: #fbd915;
  color: #111;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 700;
`;

const Desc = styled.p`
  margin-bottom: 35px;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`;

const Button = styled.button`
  padding: 15px 28px;
  border: none;
  border-radius: 50px;
  color: #fff;
  background-color: #111;
  font-weight: 600;
`;

export default MainBanner;

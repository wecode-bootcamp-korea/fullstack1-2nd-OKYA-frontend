import React, { useState, useEffect } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import styled from 'styled-components';

const MainPromotion = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    fetch('data/mainPromotionData.json')
      .then(res => res.json())
      .then(data => {
        setPromotions(data.mainPromotionData);
      });
  }, []);

  return (
    <MainPromotionContainer>
      <Title>진행중인 이벤트 및 프로모션</Title>
      <FlexWrap>
        <MainPromotionGrid>
          {promotions.map(promotion => {
            if (promotion.id === 1) {
              return (
                <PromoWrapper>
                  <Image>
                    <img src={promotion.image_url} alt="promotion" />
                  </Image>
                  <DescBack2>
                    <Header>{promotion.title}</Header>
                    <Desc>{promotion.desc}</Desc>
                    <Button>
                      <BsArrowRightShort color="white" size="32" />
                    </Button>
                  </DescBack2>
                </PromoWrapper>
              );
            } else if (promotion.id === 2) {
              return (
                <PromoWrapper>
                  <Image>
                    <img src={promotion.image_url} alt="promotion" />
                  </Image>
                  <DescBack3>
                    <Header>{promotion.title}</Header>
                    <Desc>{promotion.desc}</Desc>
                    <Button>
                      <BsArrowRightShort color="white" size="32" />
                    </Button>
                  </DescBack3>
                </PromoWrapper>
              );
            } else {
              return (
                <PromoWrapper>
                  <Image>
                    <img src={promotion.image_url} alt="promotion" />
                  </Image>
                  <DescBack>
                    <Header>{promotion.title}</Header>
                    <Desc>{promotion.desc}</Desc>
                    <Button>
                      <BsArrowRightShort color="white" size="32" />
                    </Button>
                  </DescBack>
                </PromoWrapper>
              );
            }
          })}
        </MainPromotionGrid>
      </FlexWrap>
    </MainPromotionContainer>
  );
};

const MainPromotionContainer = styled.div`
  grid-column: 2 / span 12;
  margin-bottom: 50px;
  cursor: pointer;
`;

const FlexWrap = styled.div`
  display: flex;
`;

const Title = styled.p`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 900;
`;

const MainPromotionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 1.25rem;
  margin: 12px 0;
  width: 100%;
`;

const PromoWrapper = styled.div`
  grid-column: span 1;
`;

const Image = styled.div`
  font-size: 0px;
`;

const DescBack = styled.div`
  position: relative;
  height: 300px;
  padding: 32px;
  background-color: #95afe2;
`;

const DescBack2 = styled.div`
  position: relative;
  height: 300px;
  padding: 32px;
  background-color: #ffe500;
`;

const DescBack3 = styled.div`
  position: relative;
  height: 300px;
  padding: 32px;
  background-color: #9aadcb;
`;

const Header = styled.h1`
  margin-bottom: 10px;
  line-height: 1.5;
  font-size: 28px;
  font-weight: 900;

  &:hover {
    text-decoration: underline;
  }
`;

const Desc = styled.p`
  line-height: 1.8;
  font-size: 16px;
`;

const Button = styled.button`
  position: absolute;
  top: 210px;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50px;
  background-color: #111;
`;

export default MainPromotion;

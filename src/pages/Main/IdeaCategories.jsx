import React, { useState, useEffect } from 'react';
import CategoryBtn from './CategoryBtn';
import styled from 'styled-components';

const IdeaCategories = ({ masonryImages, setMasonryImages }) => {
  const [bottons, setButtons] = useState([]);

  useEffect(() => {
    fetch('data/categoryBtnData.json')
      .then(res => res.json())
      .then(data => {
        setButtons(data.categoryBtnData);
      });
  }, []);

  const filterBedroom = id => {
    setMasonryImages(
      masonryImages.filter(masonryImage => masonryImage.category_id === id)
    );
  };

  const filterLighting = id => {
    setMasonryImages(
      masonryImages.filter(masonryImage => masonryImage.category_id === id)
    );
  };

  return (
    <Wrap>
      <Title>홈퍼니싱 아이디어 더 보기</Title>
      <ButtonWrap>
        {bottons.map(button => {
          if (button.id === 1) {
            return (
              <CategoryBtn
                key={button.id}
                name={button.name}
                filterBedroom={filterBedroom}
                button={button}
              />
            );
          } else if (button.id === 2) {
            return (
              <CategoryBtn
                key={button.id}
                name={button.name}
                filterLighting={filterLighting}
                button={button}
              />
            );
          } else {
            return (
              <CategoryBtn button={button} key={button.id} name={button.name} />
            );
          }
        })}
      </ButtonWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  grid-column: 2 / span 12;
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 900;
`;

const ButtonWrap = styled.div`
  padding: 12px 0;
`;

export default IdeaCategories;

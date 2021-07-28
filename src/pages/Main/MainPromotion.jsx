import React, { useState, useEffect } from 'react';
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
    <>
      {promotions.map(promotion => {
        return (
          <PromoWrapper>
            <div>
              <img src={promotion.image_url} alt="promotion" />
            </div>
            <div>
              <h1>{promotion.title}</h1>
              <p>{promotion.desc}</p>
              <button>asdfa</button>
            </div>
          </PromoWrapper>
        );
      })}
      ;
    </>
  );
};

const PromoWrapper = styled.div`
  grid-column: 2 / span 4;
`;

export default MainPromotion;

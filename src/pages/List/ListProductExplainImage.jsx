import React from 'react';
import styled from 'styled-components';

const ListProductionExplainImage = props => {
  const { img, name } = props;

  return (
    <CategoryContainer>
      <CategoryImageCard>
        <img alt={name} src={img} />
      </CategoryImageCard>
      <div>
        <ImageName>{name}</ImageName>
      </div>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  width: 25%;
  margin-bottom: 20px;
`;

const CategoryImageCard = styled.div`
  img {
    width: 310px;
    height: 140px;
    margin-top: 30px;
    margin-bottom: 10px;
    object-fit: cover;
  }
`;

const ImageName = styled.div`
  margin-left: 4px;
  margin-top: 15px;
  color: #484848;
  font-size: 17px;
`;

export default ListProductionExplainImage;

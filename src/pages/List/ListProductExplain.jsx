import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListProductionExplainImage from './ListProductExplainImage';

const ListProductExplain = () => {
  const [productCategory, setProductCategory] = useState([]);

  useEffect(() => {
    fetch('data/productCategoryData.json')
      .then(res => res.json())
      .then(data => {
        setProductCategory(data.productCategoryData);
      });
  }, []);

  return (
    <ProductContainer>
      <ProductExplainTitle>의자</ProductExplainTitle>
      <ProductExplainImage>
        {productCategory.map((productCategory, index) => {
          return (
            <ListProductionExplainImage
              key={index}
              id={productCategory.id}
              img={productCategory.image_url}
              name={productCategory.name}
            />
          );
        })}
      </ProductExplainImage>
      <ProductExplainContents>
        의자는 보기에는 당연 좋아야 되지만, 앉았을 때 그 푹신함. 만
        굿땡이여야하죠. OKYA 의자는 즐거운 프로그래밍 공부에 있어서도 빼 놓을 수
        없죠. 좋은 의자에 앉아야 코드도 잘 짜진다는 얘기가 있잖아요. 후훗훗훗.
        자신에게 딱 맞는 의자로 가장 잘 맞는 스타일을 찾아보세요. 코디된 가구를
        좋아하신다면 OKYA로 연락주세요. 당신께 알맞은 의자세트를 직접 만나실 수
        있습니다.
      </ProductExplainContents>
    </ProductContainer>
  );
};

const ProductContainer = styled.div``;

const ProductExplainTitle = styled.h1`
  margin-bottom: 50px;
  font-size: 37.5px;
  font-weight: 700;
  font-family: 'Noto IKEA';
  line-height: 1.34;
  letter-spacing: -0.53px;
  overflow-wrap: break-word;
`;

const ProductExplainImage = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const ProductExplainContents = styled.div`
  display: block;
  width: 800px;
  margin-top: 40px;
  color: #484848;
  font-size: 16px;
  font-family: 'Noto IKEA';
  line-height: 24px;
`;

export default ListProductExplain;

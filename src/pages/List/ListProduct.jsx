import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListProductCard from './ListProductCard';

const ListProduct = () => {
  const [listProduct, setListproduct] = useState([]);

  useEffect(() => {
    fetch('/data/listProductData.json')
      .then(res => res.json())
      .then(data => {
        setListproduct(data.listProductData);
      });
  }, []);

  return (
    <ProductContainer>
      {listProduct.map((listProduct, index) => {
        return (
          <ListProductCard
            key={index}
            isHighlight={index === 3}
            id={listProduct.id}
            img={listProduct.image_url}
            hoverImg={listProduct.hover_image_url}
            name={listProduct.name}
            description={listProduct.description}
            price={listProduct.price}
          />
        );
      })}
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: grid;
  border-top: 0.5px solid #dfdfdf;
  padding-top: 30px;
  margin-top: 30px;
  column-gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-auto-flow: row dense;
  grid-auto-rows: 1fr;
`;

export default ListProduct;

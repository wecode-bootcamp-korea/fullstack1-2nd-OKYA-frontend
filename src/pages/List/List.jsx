import React, { useEffect, useState } from 'react';
import ListProduct from './ListProduct';

const List = () => {
  const [listProduct, setListproduct] = useState([]);

  useEffect(() => {
    fetch('data/listProductData.json')
      .then(res => res.json())
      .then(data => {
        setListproduct(data.listProductData);
      });
  }, []);

  return (
    <div className="list">
      {listProduct.map((listProduct, index) => {
        return (
          <ListProduct
            key={index}
            id={listProduct.id}
            img={listProduct.img_url}
            name={listProduct.product_name}
            description={listProduct.product_description}
          />
        );
      })}
    </div>
  );
};

export default List;

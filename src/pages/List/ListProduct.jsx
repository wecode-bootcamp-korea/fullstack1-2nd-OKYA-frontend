import React from 'react';

const ListProduct = props => {
  const { img } = props;
  return (
    <div className="listProduct">
      <section className="productImage">
        <img className="chairProduct" src={img} alt="chairProduct" />
      </section>
    </div>
  );
};

export default ListProduct;

import React, { useState } from 'react';
import styled from 'styled-components';
import { IoBasketOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

const ListProductCard = props => {
  const [isProductHover, setIsProductHover] = useState(false);
  const { isHighlight, img, hoverImg, name, description, price } = props;

  const token = localStorage.getItem('token');
  const history = useHistory();

  const addToCart = () => {
    if (!token) {
      alert('로그인 후 이용하실 수 있습니다.');
      return history.push('/login');
    }

    fetch('http://10.89.2.240:8000/carts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId: props.id,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(result => {
        alert('장바구니에 담겼습니다.');
      });
  };

  return (
    <ProductCardContainer
      onMouseEnter={() => setIsProductHover(true)}
      onMouseLeave={() => setIsProductHover(false)}
    >
      <ProductBox>
        <input type="checkbox" name="checkboxname" />
        <span>
          <label for="checkbox"> 비교</label>
        </span>
      </ProductBox>
      <ProductCardImage>
        <img alt={name} src={img} />
        <img alt={name} src={hoverImg} />
      </ProductCardImage>
      <ProductInfoWrap>
        <div>
          <ul>
            <ProductName>{name}</ProductName>
            <ProductDescription>{description}</ProductDescription>
            {isHighlight ? (
              <PriceWrapHighlight>
                <PriceWrap>
                  <PriceSymbol>₩</PriceSymbol>
                  <Price>{price.toLocaleString()}</Price>
                </PriceWrap>
              </PriceWrapHighlight>
            ) : (
              <PriceWrap>
                <PriceSymbol>₩</PriceSymbol>
                <Price>{price.toLocaleString()}</Price>
              </PriceWrap>
            )}
          </ul>
        </div>
        <CartButtonWrap>
          {isProductHover && (
            <CartButton>
              <Button onClick={addToCart}>
                <IoBasketOutline size="20" />
              </Button>
            </CartButton>
          )}
        </CartButtonWrap>
      </ProductInfoWrap>
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  display: block;
  padding-bottom: 100px;
  margin-bottom: 100px;
  border-bottom: 0.5px solid #dfdfdf;
`;

const ProductBox = styled.div`
  display: inline;
  cursor: pointer;
  label {
    color: #484848;
    font-size: 13px;
  }
`;

const ProductCardImage = styled.div`
  position: relative;
  margin-top: 20px;
  img {
    width: 100%;
    transition: all 0.3s ease;
    &:last-child {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: all 0.3s ease;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

const ProductInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ProductName = styled.li`
  margin-bottom: 8px;
  width: 60%;
  font-size: 15px;
  font-weight: 900;
`;

const ProductDescription = styled.li`
  margin-bottom: 10px;
  color: #484848;
  font-size: 14px;
`;

const PriceWrapHighlight = styled.div`
  background-color: #ffdb00;
  box-shadow: 0.125rem 0.125rem #e00751;
`;

const PriceWrap = styled.div`
  display: flex;
  margin-left: 5px;
  font-weight: 900;
  font-family: 'Noto IKEA';
`;

const PriceSymbol = styled.span`
  display: flex;
  font-size: 10px;
  font-weight: 700;
  vertical-align: inherit;
`;

const Price = styled.div`
  display: flex;
  margin-left: 5px;
  font-weight: 700;
  font-family: 'Noto IKEA';
`;

const CartButtonWrap = styled.div``;

const CartButton = styled.div`
  text-align: center;
`;

const Button = styled.button`
  display: block;
  width: 35px;
  height: 35px;
  border: 0;
  border-radius: 130px;
  background: #0058a3;
  color: #fff;
  font-size: px;
  text-decoration: none;
`;

export default ListProductCard;

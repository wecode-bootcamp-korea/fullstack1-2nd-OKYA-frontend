import React from 'react';
import styled from 'styled-components';
import { IoOptionsOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';

function ListCategoryBar() {
  return (
    <CategoryBarWrap>
      <ProductCategoryBar>
        <CategoryContainer>
          <button>
            <span>비교</span>
          </button>
          <button>
            <span>
              정렬 <IoIosArrowDown />
            </span>
          </button>
          <button>
            <span>카테고리</span>
          </button>
          <button>
            <span>가격</span>
          </button>
          <button>
            <span>소재</span>
          </button>
          <button>
            <span>색상</span>
          </button>
          <button>
            <span>사이즈</span>
          </button>
          <button>
            <span>
              모든필터
              <IoOptionsOutline />
            </span>
          </button>
        </CategoryContainer>
        <ProductButton>
          <ProductNumber>
            <span>524개</span>
          </ProductNumber>
          <ProductButtonWord>
            <ProductInfo>
              <span>제품</span>
            </ProductInfo>
          </ProductButtonWord>
          <ProductButtonWord>
            <ProductInfo>
              <span>디지털쇼룸</span>
            </ProductInfo>
          </ProductButtonWord>
        </ProductButton>
      </ProductCategoryBar>
    </CategoryBarWrap>
  );
}

const CategoryBarWrap = styled.div``;

const ProductCategoryBar = styled.div`
  display: flex;
  grid-column: 2 / span 12;
  justify-content: space-between;
`;

const CategoryContainer = styled.div`
  padding: 12px 0;
  button {
    padding: 1rem 2rem;
    margin-right: 0.75rem;
    border: none;
    border-radius: 2rem;
    background-color: #f5f5f5;
    &:hover {
      background-color: #e7e7e7;
    }
  }
`;

const ProductButton = styled.div`
  display: flex;
  padding: 0.5rem;
  margin-top: 10px;
  color: #484848;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const ProductNumber = styled.div`
  margin-top: 10px;
`;

const ProductButtonWord = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-weight: 600;
`;

const ProductInfo = styled.div`
  &:hover {
    text-decoration: underline;
  }
`;

export default ListCategoryBar;

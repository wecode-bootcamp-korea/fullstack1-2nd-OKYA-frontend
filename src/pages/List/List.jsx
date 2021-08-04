import React from 'react';
import styled from 'styled-components';
import ListProductExplain from './ListProductExplain';
import ListProduct from './ListProduct';
import Container from '../../components/Container/Container';
import ListCategoryBar from './ListCategoryBar';

const List = () => {
  return (
    <Container>
      <ListWrap>
        <ListContainer>
          <ListProductExplain />
        </ListContainer>
        <CatergoryWrap>
          <ListCategoryBar />
        </CatergoryWrap>
        <ListProduct />
      </ListWrap>
    </Container>
  );
};

export default List;

const ListWrap = styled.div`
  display: grid;
  grid-column: 2 / span 12;
`;

const ListContainer = styled.div`
  margin-top: 50px;
`;

const CatergoryWrap = styled.div`
  margin-top: 70px;
`;

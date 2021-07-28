import React from 'react';
import Container from '../../components/Container/Container';
import CartContainer from './CartContainer';
import OrderContainer from './OrderContainer';
import EmptyCart from './EmptyCart';
import styled from 'styled-components';

const Cart = () => {
  return (
    <Container>
      <ContainerGridWrap>
        <CartContainer />
        <OrderContainer />
        <EmptyCart />
      </ContainerGridWrap>
    </Container>
  );
};

const ContainerGridWrap = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: 1fr;
  grid-column-gap: 1.25rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-column: 2 / span 12;
`;

export default Cart;

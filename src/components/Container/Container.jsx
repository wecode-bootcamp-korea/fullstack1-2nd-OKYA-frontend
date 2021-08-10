import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Container = ({ children, marginTop }) => {
  return (
    <>
      <Nav />
      <GridContainer marginTop={marginTop}>{children}</GridContainer>
      <Footer />
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(13, minmax(0, 1fr));
  column-gap: 1.25rem;
  width: 100%;
  padding: 0 2.5rem 0 1.25rem;
  margin-top: 80px;
`;

export default Container;

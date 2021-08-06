import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <Nav />
      <Text>오케야 메인!</Text>;
      <Footer />
    </>
  );
};

const Text = styled.p`
  height: 400px;
`;

export default Main;

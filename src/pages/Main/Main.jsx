import React from 'react';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <Nav />
      <Text>오케야 메인!</Text>;
    </>
  );
};

const Text = styled.p`
  height: 10000px;
`;

export default Main;

import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import Container from '../../components/Container/Container';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Signup = () => {
  return (
    <>
      <Nav />
      <Container>
        <Wrapper>
          <LeftSection />
          <RightSection />
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 5rem;
  width: 90vw;
`;

export default Signup;

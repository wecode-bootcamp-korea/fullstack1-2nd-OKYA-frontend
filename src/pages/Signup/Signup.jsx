import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Signup = () => {
  return (
    <>
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
  margin: 7rem 7rem;
  margin-bottom: 400px;
  width: 90vw;
`;

export default Signup;

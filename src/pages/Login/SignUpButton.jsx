import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SignUpButton() {
  return (
    <Wrapper to="/signup">
      <Button>회원가입</Button>
    </Wrapper>
  );
}

const Wrapper = styled(Link)``;

const Button = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 3.5rem;
  background: #f5f5f5;
  border-radius: 40px;
  border: 0;
  color: #111;
  font-weight: 700;
  font-size: 0.875rem;
`;

export default SignUpButton;

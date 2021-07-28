import React from 'react';
import styled from 'styled-components';

function SignInButton() {
  return <Button>로그인</Button>;
}

const Button = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 3.5rem;
  background: #0058a3;
  border-radius: 40px;
  border: 0;
  color: #fff;
  font-weight: 700;
  font-size: 0.875rem;
`;

export default SignInButton;

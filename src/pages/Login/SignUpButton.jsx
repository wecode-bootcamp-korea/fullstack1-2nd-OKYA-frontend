import React from 'react';
import styled from 'styled-components';

function SignUpButton() {
  return <Button>회원가입</Button>;
}

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

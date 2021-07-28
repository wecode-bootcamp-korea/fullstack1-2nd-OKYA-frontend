import React from 'react';
import styled from 'styled-components';

function KakaoButton() {
  return <Button>KaKao 로그인</Button>;
}

const Button = styled.button`
  margin-top: 15px;
  height: 3.5rem;
  width: 100%;
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.black};
  border: 0;
  border-radius: 40px;
  font-weight: 700;
  font-size: 0.875rem;
`;

export default KakaoButton;

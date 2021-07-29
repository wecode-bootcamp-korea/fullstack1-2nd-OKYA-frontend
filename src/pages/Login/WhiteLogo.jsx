import React from 'react';
import styled from 'styled-components';
import White_Logo from './Image/OKYA_logo_white.png';

function WhiteLogo() {
  return <Logo src={White_Logo} />;
}

const Logo = styled.img`
  width: 88px;
  height: 44px;
`;
export default WhiteLogo;

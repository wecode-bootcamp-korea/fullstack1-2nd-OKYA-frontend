import React from 'react';
import styled from 'styled-components';
import Blue_Logo from '../../pages/Login/Image/OKYA_logo_blue.png';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <LogoBox to="/">
      <Logo src={Blue_Logo} />
    </LogoBox>
  );
};

const LogoBox = styled(Link)`
  display: grid;
  grid-column: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  width: 90px;
  height: 36px;
`;

export default NavLogo;

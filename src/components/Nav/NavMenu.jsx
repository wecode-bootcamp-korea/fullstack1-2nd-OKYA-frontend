import React from 'react';
import styled from 'styled-components';

const NavMenu = ({ openModal }) => {
  return (
    <>
      <Menu1 onClick={openModal}>모든 제품</Menu1>
      <Menu2>디지털 쇼룸</Menu2>
    </>
  );
};

const Menu1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  background-color: ${props => props.theme.white};
  font-size: 14px;
  font-weight: bold;
`;
const Menu2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  background-color: ${props => props.theme.white};
  font-size: 14px;
  font-weight: bold;
`;

export default NavMenu;

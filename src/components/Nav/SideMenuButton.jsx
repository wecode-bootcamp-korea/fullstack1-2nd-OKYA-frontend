import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

function SideMenuButton({ openModal }) {
  return (
    <MenuButton onClick={openModal}>
      <AiOutlineMenu />
    </MenuButton>
  );
}

const MenuButton = styled.div`
  position: fixed;
  top: 2.2rem;
  left: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 0;
  background-color: ${props => props.theme.white};
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export default SideMenuButton;

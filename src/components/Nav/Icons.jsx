import React from 'react';
import styled from 'styled-components';
import { FiTruck } from 'react-icons/fi';
import { MdPersonOutline } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiPaperPlane } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Icons = () => {
  return (
    <IconBox>
      <Link to="/order">
        <FiTruck />
      </Link>
      <Link to="/login">
        <MdPersonOutline />
      </Link>
      <Link to="/wishList">
        <AiOutlineHeart />
      </Link>
      <Link to="/cart">
        <BiPaperPlane />
      </Link>
    </IconBox>
  );
};

const IconBox = styled.ul`
  display: flex;
  margin-left: 20px;
  a {
    padding-top: 1rem;
    margin-left: 20px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export default Icons;

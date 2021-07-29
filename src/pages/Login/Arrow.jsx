import { ReactComponent as LeftArrow } from './Image/left-arrow.svg';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Arrow() {
  return (
    <IconWrapper to="/">
      <LeftArrow />
    </IconWrapper>
  );
}

const IconWrapper = styled(Link)`
  svg {
    position: relative;
    top: 5.5vh;
    left: 3vw;
    width: 1.5rem;
    height: 1.5rem;
    fill: ${props => props.theme.white};
  }
`;

export default Arrow;

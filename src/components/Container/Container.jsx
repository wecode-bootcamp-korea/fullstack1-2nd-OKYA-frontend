import React from 'react';
import styled from 'styled-components';

const Container = ({ children, marginTop }) => {
  return <GridContainer marginTop={marginTop}>{children}</GridContainer>;
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(13, minmax(0, 1fr));
  column-gap: 1.25rem;
  width: 100%;
  padding: 0 2.5rem 0 1.25rem;
  margin-top: ${props => props.marginTop + 'px'};
`;

export default Container;

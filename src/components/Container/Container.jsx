import React from 'react';
import styled from 'styled-components';

const WapperContainer = ({ children, width }) => {
  return <GridContainer width={width}>{children}</GridContainer>;
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(13, minmax(0, 1fr));
  column-gap: 1.25rem;
  width: 100%;
  padding: 0 2.5rem 0 1.25rem;

  margin: ${props => props.width || '160px 0'};
`;

export default WapperContainer;

import React from 'react';
import styled from 'styled-components';

const CategoryBtn = ({ button, filterBedroom, filterLighting }) => {
  return (
    <StyledButton
      onClick={
        button.id === 1
          ? () => filterBedroom(button.id)
          : () => filterLighting(button.id)
      }
    >
      {button.name}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin: 1rem 0.75rem 1rem 0;
  padding: 1rem 2rem;
  background-color: #f5f5f5;
  border: none;
  border-radius: 2rem;

  &:hover {
    background-color: #e7e7e7;
  }
`;

export default CategoryBtn;

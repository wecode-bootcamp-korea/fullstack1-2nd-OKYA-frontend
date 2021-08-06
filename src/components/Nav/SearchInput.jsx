import React from 'react';
import styled from 'styled-components';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { FiCamera } from 'react-icons/fi';

const SearchInput = ({ toggleimagesearchmodal }) => {
  return (
    <SearchBoxWrapper>
      <SearchBox placeholder="검색어 입력" />
      <MagnifyingGlass />
      <Camera onClick={toggleimagesearchmodal} />
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  position: relative;
  display: flex;
  display: grid;
  grid-column: span 7;
  svg {
    position: absolute;
    top: 15px;
    width: 20px;
    height: 20px;
  }
`;

const MagnifyingGlass = styled(GiMagnifyingGlass)`
  top: 5px;
  left: 1.3rem;
  top: 1rem;
`;

const Camera = styled(FiCamera)`
  right: 1.3rem;
  top: 1rem;
  cursor: pointer;
`;

const SearchBox = styled.input`
  padding: 0.8125rem 3.375rem 0.8125rem 3.6rem;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 20px;
  border: 0;
`;

export default SearchInput;

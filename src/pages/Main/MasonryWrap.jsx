import React, { useState } from 'react';
import MasonryImages from './MasonryImages';
import styled from 'styled-components';

const MasonryWrap = ({ masonryImages }) => {
  const [postsPerPage, setPostsPerPage] = useState(0);

  const indexOfLast = postsPerPage + 9;
  const currentPosts = masonryImages.slice(0, indexOfLast);

  const paginate = () => {
    setPostsPerPage(indexOfLast);
  };

  return (
    <>
      <MasonryGrid>
        <MasonryImages masonryImages={currentPosts} />
      </MasonryGrid>
      <BtnWrap>
        <Button onClick={paginate}>9개 더보기</Button>
      </BtnWrap>
    </>
  );
};

const MasonryGrid = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: 1fr;
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-column: 2 / span 12;
`;

const BtnWrap = styled.div`
  grid-column: 2 / span 12;
  margin: 2rem;
  text-align: center;
`;

const Button = styled.button`
  margin: 2.5rem 0;
  padding: 10px 25px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #111;
`;

export default MasonryWrap;

import React from 'react';
import styled from 'styled-components';

const MasonryImages = ({ masonryImages }) => {
  return (
    <>
      {masonryImages.map(masonryImage => {
        if (masonryImage.id === 2) {
          return (
            <ImageFiguerId2>
              <MasonryImage
                src={masonryImage.image_url}
                alt={masonryImage.alt}
              />
            </ImageFiguerId2>
          );
        } else {
          return (
            <ImageFiguer>
              <MasonryImage
                src={masonryImage.image_url}
                alt={masonryImage.alt}
              />
            </ImageFiguer>
          );
        }
      })}
    </>
  );
};

const MasonryImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ImageFiguer = styled.figure`
  border-radius: 2em;
  grid-column: span 2;
  grid-row: ${props => props.span || 'span 4'}; ;
`;

const ImageFiguerId2 = styled.figure`
  border-radius: 2em;
  grid-column: span 2;
  grid-row: span 3;
`;

export default MasonryImages;

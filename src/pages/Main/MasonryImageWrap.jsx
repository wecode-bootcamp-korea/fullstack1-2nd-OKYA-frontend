import React, { useState, useEffect } from 'react';
import MasonryImages from './MasonryImages';

const MasonryImageWrap = () => {
  const [masonryImages, setMasonryImages] = useState([]);

  useEffect(() => {
    fetch('data/mainMasonryImageData.json')
      .then(res => res.json())
      .then(data => {
        setMasonryImages(data.mainMasonryImageData);
      });
  }, []);

  return masonryImages.map((masonryImage, index) => {
    return (
      <MasonryImages
        key={index}
        id={masonryImage.id}
        image={masonryImage.image_url}
        alt={masonryImage.alt}
      />
    );
  });
};

export default MasonryImageWrap;

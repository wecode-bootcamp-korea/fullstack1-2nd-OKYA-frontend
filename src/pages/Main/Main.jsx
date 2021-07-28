import React, { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';
import MasonryWrap from './MasonryWrap';
import IdeaCategories from './IdeaCategories';
import MainBanner from './MainBanner';
import MainPromotion from './MainPromotion';

const Main = () => {
  const [masonryImages, setMasonryImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('data/mainMasonryImageData.json')
        .then(res => res.json())
        .then(data => {
          setMasonryImages(data.mainMasonryImageData);
        });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <MainBanner />
      {/* MainPromotion 구현중 */}
      <MainPromotion />
      {/* MainPromotion 구현중 */}
      <IdeaCategories
        masonryImages={masonryImages}
        setMasonryImages={setMasonryImages}
      />
      <MasonryWrap masonryImages={masonryImages} />
    </Container>
  );
};

export default Main;

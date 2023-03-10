import { useEffect } from 'react';
import ScrollView from 'react-catbow-scrollview';
import Home from './pages/Home';
import axios from 'axios';

const Catbow = () => {
  const url =
    process.env.NODE_ENV === 'development'
      ? './catbow-photo-converter/image/IMG_'
      : 'image/IMG_';

  const option = {
    imgUrl: url,
    videoImageCount: 29, // Total-number-of-images
    startNum: 1, // Image-path-start-number
    extension: '.jpg', // Available-with-any-image-extension
    scrollAreaY: 1000, // scrollArea,
    viewPort: {
      width: '100vw',
      height: '100vh',
    },
  };

  useEffect(() => {
    function fetchImages(index: number) {
      if (index > 31) {
        return;
      }
      axios(
        `https://catbow.github.io/catbow-photo-converter/image/IMG_${index}.jpg`
      );
      requestAnimationFrame(() => {
        fetchImages(index + 1);
      });
    }
    if (process.env.NODE_ENV !== 'development') {
      fetchImages(1);
    }
  }, []);

  return <ScrollView option={option} viewItem={<Home />} />;
};

export default Catbow;
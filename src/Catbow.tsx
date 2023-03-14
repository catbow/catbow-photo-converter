import { useEffect, useRef, useState } from 'react';
import ScrollView, { TypeScrollView } from 'react-catbow-scrollview';
import Home from './pages/Home';
import axios from 'axios';

const Catbow = () => {
  const [ejectRatio, setEjectRatio] = useState(0);
  const imgGetController = useRef({
    1: false,
    2: false,
    3: false,
  });
  const url =
    process.env.NODE_ENV === 'development'
      ? './catbow-photo-converter/image/IMG_'
      : 'image/IMG_';

  const option: TypeScrollView = {
    imgUrl: url,
    videoImageCount: 702, // Total-number-of-images
    startNum: 1, // Image-path-start-number
    extension: '.jpg', // Available-with-any-image-extension
    scrollAreaY: 50000, // scrollArea,
    viewPort: {
      width: '100vw',
      height: '100vh',
    },
  };

  useEffect(() => {
    function fetchImages({ start, end }: { start: number; end: number }) {
      if (start > end) {
        return;
      }
      axios(
        `https://catbow.github.io/catbow-photo-converter/image/IMG_${start}.jpg`
      );
      requestAnimationFrame(() => {
        fetchImages({ start: start + 1, end });
      });
    }

    if (!imgGetController.current[3] && ejectRatio > 50) {
      fetchImages({ start: 521, end: 703 });
      imgGetController.current[3] = true;
    } else if (!imgGetController.current[2] && ejectRatio > 20) {
      fetchImages({ start: 281, end: 520 });
      imgGetController.current[2] = true;
    } else if (!imgGetController.current[1] && ejectRatio >= 0) {
      fetchImages({ start: 1, end: 280 });
      imgGetController.current[1] = true;
    }
  }, [ejectRatio]);

  return (
    <ScrollView
      option={option}
      setEjectRatio={setEjectRatio}
      viewItem={<Home />}
    />
  );
};

export default Catbow;

import { useEffect, useRef, useState } from 'react';
import ScrollView, { TypeScrollView } from 'react-catbow-scrollview';
import Home from './pages/Home';
import axios from 'axios';

/** 이미지 몇장씩 불러올지 설정 */
const imageRanges = [
  { start: 1, end: 70 },
  { start: 71, end: 140 },
  { start: 141, end: 210 },
  { start: 211, end: 280 },
  { start: 281, end: 350 },
  { start: 351, end: 420 },
  { start: 421, end: 490 },
  { start: 491, end: 560 },
  { start: 561, end: 630 },
  { start: 631, end: 703 },
];

const Catbow = () => {
  const [ejectRatio, setEjectRatio] = useState(0);
  const imgGetController = useRef({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
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
    if (process.env.NODE_ENV !== 'development') {
      for (let i = 1; i <= imageRanges.length; i++) {
        const imageRange = imageRanges[i - 1];
        if (ejectRatio > i * 7 && !imgGetController.current[i]) {
          fetchImages(imageRange);
          imgGetController.current[i] = true;
        }
      }
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

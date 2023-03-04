import ScrollView from 'react-catbow-scrollview';
import Home from './pages/Home';

const Catbow = () => {
  const url =
    process.env.NODE_ENV === 'development'
      ? './catbow-photo-converter/image/IMG_'
      : 'image/IMG_';

  const option = {
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

  return <ScrollView option={option} viewItem={<Home />} />;
};

export default Catbow;

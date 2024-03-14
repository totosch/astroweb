import { useState } from 'react';
import './Carousel.css';

interface ImageObject {
  image: string;
}

interface CarouselProps {
  images: ImageObject[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setImageIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
  };

  const goToNextImage = () => {
    setImageIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left-button" onClick={goToPreviousImage}>
        {" < "}
      </button>
      <img src={images[imageIndex].image} alt={`Image ${imageIndex}`} className="carousel-image" />
      <button className="carousel-button right-button" onClick={goToNextImage}>
        {" > "}
      </button>
    </div>
  ); 
  
};

export default Carousel;

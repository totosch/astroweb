import './Carousel.css';

interface CarouselProps {
  image: string;
  title: string;
}

const Carousel = ({ image, title }: CarouselProps) => {
  return (
    <div className="carousel-container">
      <img src={image} alt={title} className="carousel-image" />
      <h2 className="carousel-title">{title}</h2>
    </div>
  );
};

export default Carousel;
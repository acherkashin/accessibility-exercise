import './Carousel.css';
import chevronLeft from './assets/chevron-left.png';
import chevronRight from './assets/chevron-right.png';

export interface Slide {
  id: string;
  imageUrl: string;
  altText: string;
}

export interface CarouselProps {
  slides: Slide[];
}

/**
 * https://www.w3.org/WAI/tutorials/carousels/
 */
export function Carousel({ slides }: CarouselProps) {
  return (
    <div className="carousel">
      <ul className="carousel__slides">
        {slides.map(({ id, imageUrl, altText }) => <li key={id}><img src={imageUrl} alt={altText} /></li>)}
      </ul>
      <ul className="carousel__controls">
        <li>
          <button className="carousel__button carousel__button--prev">
            <img src={chevronLeft} alt="Previous Item" />
          </button>
        </li>
        <li>
          <button className="carousel__button carousel__button--next">
            <img src={chevronRight} alt="Next Item" />
          </button>
        </li>
      </ul>
    </div>
  );
}

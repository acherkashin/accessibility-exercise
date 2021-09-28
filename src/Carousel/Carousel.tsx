import './Carousel.css';

export interface Slide {
  id: string;
  imageUrl: string;
  altText: string;
}

export interface CarouselProps {
  slides: Slide[];
}

export function Carousel({ slides }: CarouselProps) {
  return (
    <ul className="carousel">
      {slides.map(({ id, imageUrl, altText }) => <li key={id}><img src={imageUrl} alt={altText} /></li>)}
    </ul>
  );
}

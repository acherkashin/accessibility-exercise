import './Carousel.css';
import chevronLeft from './assets/chevron-left.png';
import chevronRight from './assets/chevron-right.png';
import { useState } from 'react';
import classNames from 'classnames';

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
 * TODO: animation
 * TODO: slide should be focused after prev/next buttons
 */
export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(slides[0].id);
  const currentIndex = slides.findIndex(item => item.id === current);

  const selectNext = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex === slides.length) {
      nextIndex = 0;
    }

    setCurrent(slides[nextIndex].id);
  };

  const selectPrev = () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex <= -1) {
      prevIndex = slides.length - 1;
    }

    setCurrent(slides[prevIndex].id);
  };

  return (
    <div className="carousel">
      <ul className="carousel__slides">
        {slides.map(({ id, imageUrl, altText }) =>
          <li key={id} className={classNames("carousel__slide-item", {
            "carousel__slide-item--current": id === current,
          })}>
            <img className="carousel__slide-item-content" src={imageUrl} alt={altText} />
          </li>)}
      </ul>
      <ul className="carousel__controls">
        <li>
          <button className="carousel__button carousel__button--prev" onClick={selectPrev}>
            <img src={chevronLeft} alt="Предыдущий слайд" />
          </button>
        </li>
        <li>
          <button className="carousel__button carousel__button--next" onClick={selectNext}>
            <img src={chevronRight} alt="Следующий слайд" />
          </button>
        </li>
      </ul>
      <div aria-live="polite" aria-atomic="true" className="liveregion visually-hidden">{slides[currentIndex].altText} Слайд {currentIndex + 1} из {slides.length}</div>
    </div>
  );
}

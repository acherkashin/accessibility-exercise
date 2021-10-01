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
 * ✅ https://www.w3.org/WAI/tutorials/carousels/
 * Прочитать - https://www.w3.org/TR/wai-aria-practices-1.1/examples/carousel/carousel-1.html
 * [Доступная карусель - Юлия Долгун](https://www.youtube.com/watch?v=DAO9_bXCTuk)
 * TODO: animation. scroll snap?
 */
export function Carousel({ slides }: CarouselProps) {
  const [currentId, setCurrent] = useState(slides[0].id);
  const currentIndex = slides.findIndex(item => item.id === currentId);

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
    <div className="carousel" aria-roledescription="Карусель">
      <ul className="carousel__controls">
        <li>
          <button className="carousel__button carousel__button--prev" onClick={selectPrev} aria-label="Предыдущий слайд">
            <img src={chevronLeft} role="presentation" alt="" />
          </button>
        </li>
        <li>
          <button className="carousel__button carousel__button--next" onClick={selectNext} aria-label="Следующий слайд">
            <img src={chevronRight} role="presentation" alt="" />
          </button>
        </li>
      </ul>
      <ul className="carousel__slides">
        {slides.map(({ id, imageUrl, altText }) =>
          <li key={id} tabIndex={id === currentId ? 0 : undefined} className={classNames("carousel__slide-item", {
            "carousel__slide-item--current": id === currentId,
          })}>
            <img className="carousel__slide-item-content" src={imageUrl} alt={altText} />
          </li>)}
      </ul>
      <div aria-live="polite" aria-atomic="true" className="liveregion visually-hidden">Слайд {currentIndex + 1} из {slides.length}</div>
    </div>
  );
}

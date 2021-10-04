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
  name: string;
  slides: Slide[];
}

/**
 * ✅ https://www.w3.org/WAI/tutorials/carousels/
 * ✅ https://www.w3.org/TR/wai-aria-practices-1.1/#carousel
 * ✅ [Доступная карусель - Юлия Долгун](https://www.youtube.com/watch?v=DAO9_bXCTuk)
 */
export function Carousel({ slides, name }: CarouselProps) {
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
    <section role="group" className="carousel" aria-roledescription="Карусель" aria-label={name}>
      <div className="carousel__controls">
        <button className="carousel__button carousel__button--prev" onClick={selectPrev} aria-label="Предыдущий слайд">
          <img src={chevronLeft} role="presentation" alt="" />
        </button>
        <button className="carousel__button carousel__button--next" onClick={selectNext} aria-label="Следующий слайд">
          <img src={chevronRight} role="presentation" alt="" />
        </button>
      </div>
      <div className="carousel__slides" aria-live="polite">
        {slides.map(({ id, imageUrl, altText }, index) =>
          <div key={id}
            className={classNames("carousel__slide-item", {
              "carousel__slide-item--current": id === currentId,
            })}
            role="group"
            aria-roledescription="Слайд"
            aria-label={`${index + 1} из ${slides.length}`}
            tabIndex={id === currentId ? 0 : undefined}>
            <img className="carousel__slide-item-content" src={imageUrl} alt={altText} />
          </div>)}
      </div>
    </section>
  );
}

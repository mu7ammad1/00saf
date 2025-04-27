import React, { useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;

      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi],
  );

  return (
    <div className="embla">
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container">
          {slides.map((index) => (
            <div key={index} className="embla__slide bg-teal-500">
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            disabled={prevBtnDisabled}
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          />
          <NextButton
            disabled={nextBtnDisabled}
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

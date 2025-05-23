"use client"
import React, { useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

type PropType = {
  slides: any[];
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
          {slides.map((slide, id) => (
            <div
              key={id}
              className="embla__slide flex items-end relative mx-5"
              style={{
                width: "100%",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-gradient-to-t to-white/0 from-black/30 dark:to-black/0 dark:from-white/30 absolute inset-0 z-0 rounded-3xl" />
              <div className="p-3 flex justify-between items-center w-full z-10 text-white">
                <div className="flex flex-col">
                  <h3 className="p-0 font-medium">{slide.title}</h3>
                  <p className="p-0 text-sm">{slide.description}</p>
                </div>
                <div className="flex flex-col">
                  <Button
                    as={Link}
                    className="p-0"
                    href={slide.buttonLink}
                    radius="full"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
              {slide.comingSoon == true && (
                <div className="flex flex-col absolute top-3 left-3">
                  <Button
                    isDisabled
                    as={Link}
                    className="p-3 bg-default-foreground text-default"
                    href={slide.buttonLink}
                    radius="full"
                  >
                    coming soon
                  </Button>
                </div>
              )}
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

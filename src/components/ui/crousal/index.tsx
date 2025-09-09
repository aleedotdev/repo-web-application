// ProjectCarousel.tsx
"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { ProjectCarouselProps } from "@/types";

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((embla: any) => {
    setScrollSnaps(embla.scrollSnapList());
  }, []);

  const onSelect = useCallback((embla: any) => {
    setSelectedIndex(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative w-full max-w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex px-4 sm:px-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <a target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer" href={`https://www.codeencoders.com/portfolio-details/${image?.path}`}>
                <div
                  className={`relative rounded-lg overflow-hidden
      transition-transform duration-500 ease-in-out ${index === selectedIndex ? "scale-100 z-10" : "scale-75 opacity-80"
                    }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="xl:min-w-[560px] w-full h-full object-contain rounded-[22px]"
                    width={560}
                    height={340}
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Prev Button */}
        <button
          className="cursor-pointer"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <Icon
            icon="iconoir:page-left-solid"
            width={40}
            height={40}
            className="text-white"
          />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-200 ${index === selectedIndex
                ? "bg-white"
                : "bg-dark-gray hover:bg-white/60"
                }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          className="cursor-pointer"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <Icon
            icon="iconoir:page-right-solid"
            width={40}
            height={40}
            className="text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;

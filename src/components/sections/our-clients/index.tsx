"use client";
import { Typography } from "@/components/shared/typography";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { content } from "@/data";
import OurClientsCard from "@/components/ui/our-client-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = content?.ourClientsCards;

const OurClients = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [cardWidth, setCardWidth] = useState(320);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLayout = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;

      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const gap = 24; // Consistent gap between cards

        if (width >= 1024) {
          // Calculate available width more precisely
          const containerPadding = 64; // pl-0 + pr-8 = 32px right padding
          const availableWidth = containerRect.width - containerPadding;
          const cardWidthWithGap = 340 + gap;
          const possibleCards = Math.floor(availableWidth / cardWidthWithGap);
          const actualCards = Math.max(
            1,
            Math.min(possibleCards, testimonials.length)
          );

          setSlidesPerView(actualCards);
          setCardWidth(340);
        } else if (width >= 640) {
          setSlidesPerView(1);
          setCardWidth(Math.min(340, containerRect.width - 48)); // Account for padding
        } else {
          setSlidesPerView(1);
          setCardWidth(containerRect.width - 48); // Account for padding
        }
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const visibleSlides = slidesPerView;
  const maxIndex = Math.max(0, testimonials.length - visibleSlides);

  const scrollPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const scrollNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const scrollTo = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <section className="select-none flex py-12 sm:py-16 lg:py-20 bg-[url('/assets/images/our-clients-bg.webp')] bg-cover bg-center">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-12 lg:gap-0">
          {/* Left Content */}
          <div className="flex-shrink-0 text-center lg:text-left lg:pl-8 xl:pl-32 lg:pr-12 xl:pr-20 px-4 lg:px-0">
            <Typography
              as="h1"
              size="h1"
              className="text-dark-black leading-tight font-eurostile"
            >
              Hear From
            </Typography>
            <Typography
              as="h1"
              size="h1"
              className="text-orange leading-tight font-eurostile"
            >
              Our Clients
            </Typography>

            <div className="mt-2 sm:mt-3">
              <Typography className="text-black text-base sm:text-lg max-w-none lg:max-w-[390px] mx-auto lg:mx-0 font-eurostile-semibold">
                Over 30+ satisfied customers. See how our products and services
                have made a difference.
              </Typography>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="flex-1 min-w-0">
            {/* Container with proper spacing for full card visibility */}
            <div className="pl-4 lg:pl-0" ref={containerRef}>
              <div className="overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination]}
                  slidesPerView="auto"
                  spaceBetween={20}
                  onSwiper={setSwiperInstance}
                  onSlideChange={handleSlideChange}
                  allowTouchMove={true}
                  watchOverflow={true}
                  centeredSlides={false}
                  loop={true} 
                  style={
                    {
                      "--swiper-pagination-bullet-inactive-color": "#d1d5db",
                      "--swiper-pagination-bullet-active-color": "#f97316",
                    } as React.CSSProperties
                  }
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide
                      key={testimonial.id}
                      style={{ width: `${cardWidth}px`, flexShrink: 0 }}
                      className="last:pr-5"
                    >
                      <div className="h-full">
                        <OurClientsCard testimonial={testimonial} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Navigation */}
            <div className="pl-0 md:pl-5 lg:pl-0 flex flex-col-reverse sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="flex gap-3 sm:gap-4">
                <div>
                  <button
                    onClick={scrollPrev}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-orange disabled:bg-gray disabled:cursor-not-allowed cursor-pointer text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Previous testimonial"
                  >
                    <Icon icon="mdi:chevron-left" width={20} height={20} />
                  </button>
                </div>
                <div className="block sm:hidden md:block">
                  <button
                    onClick={scrollNext}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-orange disabled:bg-gray disabled:cursor-not-allowed cursor-pointer text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Next testimonial"
                  >
                    <Icon icon="mdi:chevron-right" width={20} height={20} />
                  </button>
                </div>
              </div>

              {/* Dots - only show if there are more slides than can be displayed */}
              <div className="flex gap-1 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-7 sm:w-8 xl:w-12 h-1 rounded-full shadow-xl transition-all duration-200 ${
                      index === currentIndex
                        ? "bg-orange"
                        : "bg-light-gray hover:bg-gray"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="hidden sm:block md:hidden">
                <button
                  onClick={scrollNext}
                  disabled={currentIndex >= maxIndex}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-orange disabled:bg-gray disabled:cursor-not-allowed cursor-pointer text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <Icon icon="mdi:chevron-right" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;

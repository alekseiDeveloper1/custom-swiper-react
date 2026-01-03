
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import { SubSliderContainer, SubSlide as SubSlideStyles, NavButton } from './SubSlider.styles';
import { SubSlide } from '@/types';

interface SubSliderProps {
  slides: SubSlide[];
}

export const SubSlider: React.FC<SubSliderProps> = ({ slides }) => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <SubSliderContainer>
      <NavButton className="prev" onClick={handlePrev}>&lt;</NavButton>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={50}
        slidesPerView={3}
        freeMode={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SubSlideStyles>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </SubSlideStyles>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavButton className="next" onClick={handleNext}>&gt;</NavButton>
    </SubSliderContainer>
  );
};

import React, { useRef } from 'react';
import { SubSliderContainer, SubSlide as SubSlideStyles, NavButton } from './SubSlider.styles';
import { SubSlide } from '@/types';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

interface SubSliderProps {
  slides: SubSlide[];
}

export const SubSlider: React.FC<SubSliderProps> = ({ slides }) => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const navigation = {
    prevEl: '.prev',
    nextEl: '.next',
  };

  return (
    <SubSliderContainer>
      <NavButton className="prev">&lt;</NavButton>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        slidesPerView={3}
        freeMode={true}
        navigation={navigation}
        modules={[FreeMode, Navigation]}
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
      <NavButton className="next">&gt;</NavButton>
    </SubSliderContainer>
  );
};

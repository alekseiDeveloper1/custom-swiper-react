import React, { useRef } from 'react';
import { SubSliderContainer, SubSlide as SubSlideStyles } from './SubSlider.styles';
import { SubSlide } from '@/types';
import { Button } from '../Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import useIsMobile from "@/hooks/useIsMobile";

interface SubSliderProps {
  slides: SubSlide[];
}

export const SubSlider: React.FC<SubSliderProps> = ({ slides }) => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const isMobile = useIsMobile();
  const navigation = {
    prevEl: '.prev',
    nextEl: '.next',
  };

  return (
    <SubSliderContainer>
      {!isMobile && <Button className="prev">&lt;</Button>}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        freeMode={true}
        navigation={navigation}
        modules={[FreeMode, Navigation]}
        breakpoints={{
          320: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
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
      {!isMobile && <Button className="next">&gt;</Button>}
    </SubSliderContainer>
  );
};

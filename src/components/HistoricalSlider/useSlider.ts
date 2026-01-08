import { useState, useRef, useMemo } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';
import useIsMobile from '@/hooks/useIsMobile';

export const useSlider = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const paginationId = useMemo(() => `pagination-${Math.random().toString(36).substr(2, 9)}`, []);

  const onSlideChange = (state: SwiperInstance) => {
    setActiveIndex(state.activeIndex);
  };

  const handleNavClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

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

  const setSwiper = (swiper: SwiperInstance) => {
    swiperRef.current = swiper;
  };

  return {
    activeIndex,
    isMobile,
    paginationId,
    setSwiper,
    onSlideChange,
    handleNavClick,
    handlePrev,
    handleNext,
  };
};
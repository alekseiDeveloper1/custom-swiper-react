import React, {useState, useRef, useMemo} from 'react';
import { CircularNav } from "@/components/CircularNav/CircularNav";
import { Stage } from "@/components/Stage/Stage";
import useIsMobile from '@/hooks/useIsMobile';
import {HistoricalSliderContainer, BottomWrap, NavSection, PaginationContainer, Title} from './HistoricalSlider.styles'
import { SubSlider } from '@/components/SubSlider/SubSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { SliderControls } from '@/components/SliderControls/SliderControls';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Slide } from '@/types';

interface HistoricalSliderProps {
    slides: Slide[];
    title: string;
}

const HistoricalSlider: React.FC<HistoricalSliderProps> = ({ slides, title }) => {

  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const paginationId = useMemo(() => `pagination-${Math.random().toString(36).substr(2, 9)}`, []);


  const onSlideChange = (state: SwiperInstance) => {
    setActiveIndex(state.activeIndex)
  }
  const handleNavClick = (index: number) => {
    if(swiperRef.current) {
      swiperRef.current.slideTo(index)
    }
  };
  const handlePrev = () => {
    if(swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const handleNext = () => {
    if(swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <HistoricalSliderContainer>
      <Title>{title}</Title>
      <Stage stage={slides[activeIndex].stage}/>
      <Swiper
        className="mySwiper"
        modules={[EffectFade, Pagination]}
        effect={"fade"}
        pagination={isMobile ? {
          el: `.${paginationId}`,
          clickable: true

        } : false}
        onSwiper={(swiper) => swiperRef.current = swiper}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={onSlideChange}
      >
        {slides.map((item, index) => {
          return (<SwiperSlide key={index}>
            {isMobile && item.title}
          </SwiperSlide>)
        })}
      </Swiper>

      {!isMobile && <NavSection>
          <CircularNav
              items={slides}
              activeIndex={activeIndex}
              onSelect={handleNavClick}
          />
      </NavSection>}
      {isMobile && <hr/>}
      <BottomWrap>
        <PaginationContainer className={paginationId}></PaginationContainer>
        <SliderControls
          onPrev={handlePrev}
          onNext={handleNext}
          current={activeIndex + 1}
          total={slides.length}
        />
        <SubSlider slides={slides[activeIndex].subSlides}/>
      </BottomWrap>
    </HistoricalSliderContainer>
  );
};

export default HistoricalSlider;
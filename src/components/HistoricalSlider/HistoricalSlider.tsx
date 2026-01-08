import React from 'react';
import { CircularNav } from "@/components/CircularNav/CircularNav";
import { Stage } from "@/components/Stage/Stage";
import { HistoricalSliderContainer, BottomWrap, NavSection, PaginationContainer, Title } from './HistoricalSlider.styles';
import { SubSlider } from '@/components/SubSlider/SubSlider';
import { SliderControls } from '@/components/SliderControls/SliderControls';
import { useSlider } from './useSlider';
import { Slide } from '@/types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface HistoricalSliderProps {
    slides: Slide[];
    title: string;
}

const HistoricalSlider: React.FC<HistoricalSliderProps> = ({ slides, title }) => {
  const {
    activeIndex,
    isMobile,
    paginationId,
    setSwiper,
    onSlideChange,
    handleNavClick,
    handlePrev,
    handleNext,
  } = useSlider();

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
        onSwiper={setSwiper}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={onSlideChange}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            {isMobile && item.title}
          </SwiperSlide>
        ))}
      </Swiper>

      {!isMobile && (
        <NavSection>
          <CircularNav
              items={slides}
              activeIndex={activeIndex}
              onSelect={handleNavClick}
          />
        </NavSection>
      )}

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
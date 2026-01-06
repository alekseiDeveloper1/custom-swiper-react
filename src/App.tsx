import React, {useState, useRef} from 'react';
import { CircularNav } from "@/components/CircularNav/CircularNav";
import { Stage } from "@/components/Stage/Stage";
import useIsMobile from './hooks/useIsMobile';
import {AppContainer, BottomWrap, NavSection, PaginationContainer, Title} from './App.styles'
import { DEFAULT_SLIDES } from "@/constants";
import { SubSlider } from '@/components/SubSlider/SubSlider';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { SliderControls } from '@/components/SliderControls/SliderControls';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const App: React.FC = () => {

  const swiperRef = useRef<SwiperInstance | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

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
    <AppContainer>
      <Title>Исторические даты</Title>
      <Stage stage={DEFAULT_SLIDES[activeIndex].stage}/>
      <Swiper
        modules={[EffectFade, Pagination]}
        effect={"fade"}
        pagination={isMobile ? {
          el: '.custom-pagination-container',
          clickable: true

        } : false}
        onSwiper={(swiper) => swiperRef.current = swiper}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={onSlideChange}
      >
        {DEFAULT_SLIDES.map((item, index) => {
          return (<SwiperSlide key={index}>
            {isMobile && item.title}
          </SwiperSlide>)
        })}
      </Swiper>

      {!isMobile && <NavSection>
          <CircularNav
              items={DEFAULT_SLIDES}
              activeIndex={activeIndex}
              onSelect={handleNavClick}
          />
      </NavSection>}
      {isMobile && <hr/>}
      <BottomWrap>
        <PaginationContainer className="custom-pagination-container"></PaginationContainer>
        <SliderControls
          onPrev={handlePrev}
          onNext={handleNext}
          current={activeIndex + 1}
          total={DEFAULT_SLIDES.length}
        />
        <SubSlider slides={DEFAULT_SLIDES[activeIndex].subSlides}/>
      </BottomWrap>
    </AppContainer>
  );
};

export default App;

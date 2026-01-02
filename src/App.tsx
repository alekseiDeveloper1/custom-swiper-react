
import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import {DEFAULT_SLIDES} from "@/constants";
import {CircularNav} from "@/components/CircularNav/CircularNav";
import {Stage} from "@/components/Stage/Stage";
import { SliderControls } from '@/components/SliderControls/SliderControls';

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  margin: 0 6rem;
  border-right: 1px solid rgba(66, 86, 122, 0.1);
  border-left: 1px solid rgba(66, 86, 122, 0.1);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: rgba(66, 86, 122, 0.1);
    
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: rgba(66, 86, 122, 0.1);
  }
    
`;

const Title = styled.h1`
  color: #42567AFF;
  font-size: 45px;
  margin-top: 20px;
  width: 50px;
  border-left: 4px solid transparent; /* The 'transparent' is key */
  border-image: linear-gradient(#3877EE, #EF5DA8) 1;
  padding: 1rem
`;

const NavSection = styled.div`
  position: absolute;
  width: 500px;
  top: 50%;
  right: 50%;
  z-index: 1;
  transform: translate(50%, -50%)
`;

const App: React.FC = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
  const onSlideChange = (state: SwiperInstance) => {
    setActiveIndex(state.activeIndex)
  }
  return (
    <AppContainer>
      <Title >Исторические даты</Title>
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={onSlideChange}
      >
        {DEFAULT_SLIDES.map((item, index) => {
          return (<SwiperSlide key={index}>
            <Stage stage={item.stage} />
          </SwiperSlide>)
        })}

      </Swiper>
      <NavSection>
        <CircularNav
          items={DEFAULT_SLIDES}
          activeIndex={activeIndex}
          onSelect={handleNavClick}
        />
      </NavSection>
      <SliderControls
        onPrev={handlePrev}
        onNext={handleNext}
        current={activeIndex + 1}
        total={DEFAULT_SLIDES.length}
      />
    </AppContainer>
  );
};

export default App;

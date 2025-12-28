
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { gsap } from 'gsap';
import Example from './components/Example';

const AppContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
`;

const App: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
  }, []);

  return (
    <AppContainer>
      <Title ref={titleRef}>React TS Template</Title>
      <p>A stable template with Swiper, GSAP, and more!</p>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide><Example /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </AppContainer>
  );
};

export default App;

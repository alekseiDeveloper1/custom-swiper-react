import { describe, expect, it, jest } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

// Mock Swiper
jest.mock('swiper/react', () => {
  const React = require('react');
  return {
    Swiper: ({ children }: any) => <div data-testid="swiper-mock">{children}</div>,
    SwiperSlide: ({ children }: any) => <div data-testid="swiper-slide-mock">{children}</div>,
  };
});

jest.mock('swiper/modules', () => ({
  EffectFade: () => null,
  Pagination: () => null,
  Navigation: () => null,
  FreeMode: () => null,
}));

jest.mock('swiper/css', () => {});
jest.mock('swiper/css/effect-fade', () => {});
jest.mock('swiper/css/pagination', () => {});
jest.mock('swiper/css/free-mode', () => {});
jest.mock('swiper/css/navigation', () => {});

// Mock useIsMobile to return false (Desktop) so CircularNav renders
jest.mock('@/hooks/useIsMobile', () => ({
  __esModule: true,
  default: () => false,
}));

describe('App Integration', () => {
  it('should render the main historical slider component', () => {
    render(<App />);
    
    // Check for the specific title passed to HistoricalSlider in App.tsx
    const title = screen.getByText(/Исторические даты/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the circular navigation on desktop', () => {
    render(<App />);
    // This requires isMobile to be false
    const nav = screen.getByTestId('circular-nav');
    expect(nav).toBeInTheDocument();
  });
});
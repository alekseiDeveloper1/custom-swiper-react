import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { SubSlider } from '../SubSlider';
import { theme } from '@/styles/theme';
import { SubSlide } from '@/types';
import useIsMobile from '@/hooks/useIsMobile';
import { describe, it, expect, jest } from '@jest/globals';
import '@testing-library/jest-dom';

jest.mock('@/hooks/useIsMobile');
jest.mock('swiper/css', () => {});
jest.mock('swiper/css/free-mode', () => {});
jest.mock('swiper/css/navigation', () => {});
// Mock Swiper
jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper-mock">{children}</div>,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => <div data-testid="swiper-slide-mock">{children}</div>,
}));

jest.mock('swiper/modules', () => ({
    FreeMode: (props: any) => null,
    Navigation: (props: any) => null,
}));


describe('SubSlider', () => {
  const mockSlides: SubSlide[] = [
    { title: 1899, description: 'Description 1' },
    { title: 1800, description: 'Description 2' },
    { title: 1888, description: 'Description 3' },
  ];

  it('renders slides correctly', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    render(
        <ThemeProvider theme={theme}>
            <SubSlider slides={mockSlides} />
        </ThemeProvider>
    );
    expect(screen.getByText('1899')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('1800')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('does not render navigation buttons on mobile', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    render(
        <ThemeProvider theme={theme}>
            <SubSlider slides={mockSlides} />
        </ThemeProvider>
    );
    expect(screen.queryByText('<')).not.toBeInTheDocument();
    expect(screen.queryByText('>')).not.toBeInTheDocument();
  });

  it('renders navigation buttons on desktop', () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);
    render(
        <ThemeProvider theme={theme}>
            <SubSlider slides={mockSlides} />
        </ThemeProvider>
    );
    expect(screen.getByText('<')).toBeInTheDocument();
    expect(screen.getByText('>')).toBeInTheDocument();
  });
});

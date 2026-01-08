import { describe, expect, it, jest } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { SliderControls } from '../SliderControls';
import { theme } from '@/styles/theme';

describe('SliderControls', () => {
  const defaultProps = {
    onPrev: jest.fn(),
    onNext: jest.fn(),
    current: 1,
    total: 6,
  };

  it('renders correctly with current and total count', () => {
    render(
      <ThemeProvider theme={theme}>
        <SliderControls {...defaultProps} />
      </ThemeProvider>
    );
    expect(screen.getByText('01/06')).toBeInTheDocument();
  });

  it('disables prev button when current is 1', () => {
    render(
      <ThemeProvider theme={theme}>
        <SliderControls {...defaultProps} current={1} />
      </ThemeProvider>
    );
    const prevBtn = screen.getByLabelText('Previous');
    expect(prevBtn).toBeDisabled();
  });

  it('disables next button when current is total', () => {
    render(
      <ThemeProvider theme={theme}>
        <SliderControls {...defaultProps} current={6} total={6} />
      </ThemeProvider>
    );
    const nextBtn = screen.getByLabelText('Next');
    expect(nextBtn).toBeDisabled();
  });

  it('calls onNext when next button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <SliderControls {...defaultProps} current={2} />
      </ThemeProvider>
    );
    const nextBtn = screen.getByLabelText('Next');
    fireEvent.click(nextBtn);
    expect(defaultProps.onNext).toHaveBeenCalled();
  });

  it('calls onPrev when prev button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <SliderControls {...defaultProps} current={2} />
      </ThemeProvider>
    );
    const prevBtn = screen.getByLabelText('Previous');
    fireEvent.click(prevBtn);
    expect(defaultProps.onPrev).toHaveBeenCalled();
  });
});
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { CircularNav } from '../CircularNav';
import { DEFAULT_SLIDES } from '@/constants';
import { theme } from '@/styles/theme';

describe('CircularNav', () => {
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  it('renders correct number of items', () => {
    render(
      <ThemeProvider theme={theme}>
        <CircularNav
          items={DEFAULT_SLIDES}
          activeIndex={0}
          onSelect={mockOnSelect}
        />
      </ThemeProvider>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(DEFAULT_SLIDES.length);
  });

  it('highlights the active index', () => {
    render(
      <ThemeProvider theme={theme}>
        <CircularNav
          items={DEFAULT_SLIDES}
          activeIndex={2}
          onSelect={mockOnSelect}
        />
      </ThemeProvider>
    );

    const activeItem = screen.getByLabelText(`Select time period 3: ${DEFAULT_SLIDES[2].title}`);
    expect(activeItem).toHaveAttribute('aria-current', 'step');

    const inactiveItem = screen.getByLabelText(`Select time period 1: ${DEFAULT_SLIDES[0].title}`);
    expect(inactiveItem).not.toHaveAttribute('aria-current');
  });

  it('calls onSelect when a dot is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <CircularNav
          items={DEFAULT_SLIDES}
          activeIndex={0}
          onSelect={mockOnSelect}
        />
      </ThemeProvider>
    );

    const secondItem = screen.getByLabelText(`Select time period 2: ${DEFAULT_SLIDES[1].title}`);
    fireEvent.click(secondItem);
    expect(mockOnSelect).toHaveBeenCalledWith(1);
  });
});
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
    // There are 6 default slides
    const dots = screen.getAllByText(/\d+/).filter(el => el.tagName === 'DIV' && !el.textContent?.includes('/'));
    expect(screen.getAllByTestId(/nav-item-\d/)).toHaveLength(6);
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

    const activeItem = screen.getByTestId('nav-item-2');
    expect(activeItem).toHaveAttribute('data-active', 'true');

    const inactiveItem = screen.getByTestId('nav-item-0');
    expect(inactiveItem).toHaveAttribute('data-active', 'false');
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

    const secondItemWrapper = screen.getByLabelText(`Select time period 2: ${DEFAULT_SLIDES[1].title}`);
    fireEvent.click(secondItemWrapper);
    expect(mockOnSelect).toHaveBeenCalledWith(1);
  });
});
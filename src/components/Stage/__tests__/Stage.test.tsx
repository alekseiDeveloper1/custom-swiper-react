import { describe, expect, it, jest } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Stage } from '../Stage';
import { theme } from '@/styles/theme';

// Mock CountUp to avoid animation delays in tests
jest.mock('react-countup', () => ({
  __esModule: true,
  default: ({ start, end }: { start: number, end: number }) => <span data-testid="countup-val">{end}</span>,
}));

describe('Stage', () => {
  it('renders start and end years correctly', () => {
    const stageData = ['1990', '1995'];
    render(
      <ThemeProvider theme={theme}>
        <Stage stage={stageData} />
      </ThemeProvider>
    );
    
    const values = screen.getAllByTestId('countup-val');
    expect(values[0]).toHaveTextContent('1990');
    expect(values[1]).toHaveTextContent('1995');
  });
});
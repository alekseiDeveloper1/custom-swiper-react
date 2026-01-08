import React from 'react';
import { ThemeProvider } from 'styled-components';
import HistoricalSlider from '@/components/HistoricalSlider/HistoricalSlider';
import { DEFAULT_SLIDES } from '@/constants';
import { theme } from '@/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HistoricalSlider slides={DEFAULT_SLIDES} title="Исторические даты" />
    </ThemeProvider>
  );
};

export default App;
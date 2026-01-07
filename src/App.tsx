import React from 'react';
import HistoricalSlider from '@/components/HistoricalSlider/HistoricalSlider';
import { DEFAULT_SLIDES } from '@/constants';

const App: React.FC = () => {
  return (
    <>
      <HistoricalSlider slides={DEFAULT_SLIDES} title="Исторические даты" />
    </>
  );
};

export default App;

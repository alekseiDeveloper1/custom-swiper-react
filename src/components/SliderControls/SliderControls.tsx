import React from 'react';
import { ControlsContainer, Counter, ButtonWrap } from './SliderControls.styles';
import { Button } from '../Button';

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
}

export const SliderControls: React.FC<SliderControlsProps> = ({ onPrev, onNext, current, total }) => {
  return (
    <ControlsContainer>
      <Counter>
        {String(current).padStart(2, '0')}/{String(total).padStart(2, '0')}
      </Counter>
      <ButtonWrap>
        <Button onClick={onPrev} disabled={current === 1} aria-label="Previous">
          &lt;
        </Button>
        <Button onClick={onNext} disabled={current === total} aria-label="Next">
          &gt;
        </Button>
      </ButtonWrap>
    </ControlsContainer>
  );
};

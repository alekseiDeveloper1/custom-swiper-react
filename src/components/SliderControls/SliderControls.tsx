import React from 'react';
import {
  ControlsContainer,
  ControlButton,
  Counter, ButtonWrap,
} from './SliderControls.styles';

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
        <ControlButton
          onClick={onPrev}
          disabled={current === 1}
        >&lt;</ControlButton>
        <ControlButton
          onClick={onNext}
          disabled={current === total}
        >&gt;</ControlButton>
      </ButtonWrap>
    </ControlsContainer>
  );
};

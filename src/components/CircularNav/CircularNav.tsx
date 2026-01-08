import React, { useMemo } from 'react';
import { Slide } from "@/types";
import {
  CounterRotator,
  NavContainer,
  NavItemWrapper,
  NavNumber,
  RotatingRing
} from "@/components/CircularNav/CircularNav.styles";
import { Button } from '../Button';

interface CircularNavProps {
  items: Slide[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const CircularNav: React.FC<CircularNavProps> = ({ items, activeIndex, onSelect }) => {
  const count = items.length;
  const radius = 250;

  const { step, offset, containerRotation } = useMemo(() => {
    const stepCalc = 360 / count;
    return {
      step: stepCalc,
      offset: 180 / count,
      containerRotation: activeIndex * -stepCalc
    };
  }, [count, activeIndex]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(index);
    }
  };

  return (
    <NavContainer data-testid="circular-nav">
      <RotatingRing style={{ transform: `rotate(${containerRotation}deg)` }}>
        {items.map((item, index) => {
          const angle = (index * step) - 90 + offset;

          return (
            <NavItemWrapper
              key={item.id}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <CounterRotator style={{ transform: `rotate(${-containerRotation}deg)` }}>
                <Button
                  variant="circular"
                  isActive={activeIndex === index}
                  onClick={() => onSelect(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-label={`Select time period ${index + 1}: ${item.title}`}
                  aria-current={activeIndex === index ? 'step' : undefined}
                  title={item.title}
                >
                  <NavNumber>{String(index + 1).padStart(2, '0')}</NavNumber>
                </Button>
              </CounterRotator>
            </NavItemWrapper>
          );
        })}
      </RotatingRing>
    </NavContainer>
  );
};

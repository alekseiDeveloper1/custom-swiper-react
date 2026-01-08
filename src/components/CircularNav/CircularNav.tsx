
import React, { useMemo } from 'react';
import { Slide } from "@/types";
import {
  CounterRotator,
  NavContainer,
  NavItemContent,
  NavItemWrapper,
  NavNumber,
  RotatingRing
} from "@/components/CircularNav/CircularNav.styles";

interface CircularNavProps {
  items: Slide[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const CircularNav: React.FC<CircularNavProps> = ({ items, activeIndex, onSelect }) => {
  const count = items.length;
  const radius = 250;

  // Memoize calculations to avoid re-computing on every render if items/count rarely change
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
              onClick={() => onSelect(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="button"
              tabIndex={0}
              aria-label={`Select time period ${index + 1}: ${item.title}`}
              aria-current={activeIndex === index ? 'step' : undefined}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <CounterRotator style={{ transform: `rotate(${-containerRotation}deg)` }}>
                <NavItemContent
                  title={item.title}
                  isActive={activeIndex === index}
                  data-active={activeIndex === index}
                  data-testid={`nav-item-${index}`}
                >
                  <NavNumber>{String(index + 1).padStart(2, '0')}</NavNumber>
                </NavItemContent>
              </CounterRotator>
            </NavItemWrapper>
          );
        })}
      </RotatingRing>
    </NavContainer>
  );
};

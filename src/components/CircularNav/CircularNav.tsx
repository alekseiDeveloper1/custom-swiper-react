import React from 'react';
import * as S from './CircularNav.styles';
import {Slide} from "@/types";

interface CircularNavProps {
  items: Slide[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const CircularNav: React.FC<CircularNavProps> = ({ items, activeIndex, onSelect }) => {
  const count = items.length;
  const step = 360 / count;
  const containerRotation = activeIndex * -step;
  const radius = 250;
  const offset = 180 / count

  return (
    <S.NavContainer>
      <S.RotatingRing style={{ transform: `rotate(${containerRotation}deg)` }}>
        {items.map((item, index) => {
          const angle = (index * step) - 90 + offset;

          return (
            <S.NavItemWrapper
              key={item.id}
              onClick={() => onSelect(index)}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`
              }}
            >
              <S.CounterRotator style={{ transform: `rotate(${-containerRotation}deg)` }}>
                <S.NavItemContent
                  title={item.title}
                  isActive={activeIndex === index}
                  data-active={activeIndex === index}
                  data-testid="nav-item-content"
                >
                  <S.NavNumber>{String(index + 1).padStart(2, '0')}</S.NavNumber>
                </S.NavItemContent>
              </S.CounterRotator>
            </S.NavItemWrapper>
          );
        })}
      </S.RotatingRing>
    </S.NavContainer>
  );
};
import React from 'react';
import { Slide } from "@/types";
import {
  CounterRotator,
  NavContainer,
  NavItemContent,
  NavItemWrapper, NavNumber,
  RotatingRing
} from "@/components/CircularNav/CircularNav.styles";

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
    <NavContainer>
      <RotatingRing style={{ transform: `rotate(${containerRotation}deg)` }}>
        {items.map((item, index) => {
          const angle = (index * step) - 90 + offset;

          return (
            <NavItemWrapper
              key={item.id}
              onClick={() => onSelect(index)}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`
              }}
            >
              <CounterRotator style={{ transform: `rotate(${-containerRotation}deg)` }}>
                <NavItemContent
                  title={item.title}
                  isActive={activeIndex === index}
                  data-active={activeIndex === index}
                  data-testid="nav-item-content"
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
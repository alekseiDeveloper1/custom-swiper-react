
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const ExampleContainer = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
`;

const Title = styled.h2`
  color: #555;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const Example: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(containerRef.current, { duration: 1, scale: 0.5, opacity: 0 });
  }, []);

  return (
    <ExampleContainer ref={containerRef}>
      <Title>Example Component</Title>
      <Button>Click Me</Button>
    </ExampleContainer>
  );
};

export default Example;

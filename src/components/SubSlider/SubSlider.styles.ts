
import styled from 'styled-components';

export const SubSliderContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubSlide = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
  }
  p {
    margin: 0;
    font-size: 0.875rem;
  }
`;

export const NavButton = styled.button`
  background: transparent;
  border: 1px solid #42567A;
  color: #42567A;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.prev {
    margin-right: 1rem;
  }
  
  &.next {
    margin-left: 1rem;
  }
`;

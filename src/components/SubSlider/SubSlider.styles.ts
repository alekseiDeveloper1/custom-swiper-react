import styled from 'styled-components';

export const SubSliderContainer = styled.div`
  position: relative;
  width: 650px;
  margin: 100px;
`;

export const SubSlide = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    color: #5D5FEF;
  }
  p {
    margin: 0;
    font-size: 0.875rem;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  background: transparent;
  border: 1px solid #42567A;
  color: #42567A;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 20px;
  &:hover {
    background-color: white;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.prev {
    top:50%;
    transform: translateY(-50%);
    left: -75px;
  }
  
  &.next {
    top:50%;
    transform: translateY(-50%);
    right: -75px
  }
`;

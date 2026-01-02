import styled from 'styled-components';

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const ControlButton = styled.button`
  background-color: #fff;
  border: 1px solid rgba(66, 86, 122, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #42567A;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const Counter = styled.div`
  font-size: 18px;
  color: #42567A;
  margin-left: 1rem;
`;

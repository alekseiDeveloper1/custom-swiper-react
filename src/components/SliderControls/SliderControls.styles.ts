import styled from 'styled-components';

export const ControlsContainer = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 20px;
    
`;

export const ControlButton = styled.button`
  border: 1px solid rgba(66, 86, 122, 0.7);
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
      background-color: white;
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

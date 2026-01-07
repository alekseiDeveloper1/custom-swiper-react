import styled from 'styled-components';

export const ControlsContainer = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1200px) {
      flex: 1 0 auto;
      width: 40%;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 20px;
  flex: 1 1 100%;
  @media (max-width: 1200px) {
      flex: 1 0 auto;
  }
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
  @media (max-width: 1200px) {
      -webkit-tap-highlight-color: transparent;
  }
  &:hover {
    background-color: white;
    @media (max-width: 1200px) {
        background-color: transparent;
    }
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

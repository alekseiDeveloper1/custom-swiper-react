import styled from 'styled-components';

export const ControlsContainer = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
      flex: 1 0 auto;
      width: 40%;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  flex: 1 1 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
      flex: 1 0 auto;
  }
`;

export const Counter = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 1rem;
`;
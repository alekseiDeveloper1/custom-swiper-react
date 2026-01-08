import styled from "styled-components";

export const HistoricalSliderContainer = styled.div`
  position: relative;
  margin: 2rem 6rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    border: none;
    margin: 2rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.border};
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 324px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
  }

  &::after, &::before {
    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 45px;
  margin-top: 120px;
  width: 50px;
  border-left: 4px solid transparent;
  border-image: linear-gradient(${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent}) 1;
  padding: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 20px;
    font-size: 7vw;
    border-image: none;
  }
`;

export const NavSection = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.sizes.circle}px;
  top: 324px;
  right: 50%;
  z-index: 1;
  transform: translate(50%, -50%);
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex: 0 0 40%;
    align-items: center;
  }
`;

export const BottomWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
  }
`;
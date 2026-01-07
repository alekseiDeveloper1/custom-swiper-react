import styled from "styled-components";

export const HistoricalSliderContainer = styled.div`
  position: relative;
  margin: 2rem 6rem;
  border-right: 1px solid rgba(66, 86, 122, 0.1);
  border-left: 1px solid rgba(66, 86, 122, 0.1);
  @media (max-width: 1200px) {
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
    background-color: rgba(66, 86, 122, 0.1);
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 324px;
    width: 100%;
    height: 1px;
    background-color: rgba(66, 86, 122, 0.1);
  }
    &::after, &::before {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  
`;

export const Title = styled.h1`
  color: #42567AFF;
  font-size: 45px;
  margin-top: 120px;
  width: 50px;
  border-left: 4px solid transparent; /* The 'transparent' is key */
  border-image: linear-gradient(#3877EE, #EF5DA8) 1;
  padding: 1rem;
  @media (max-width: 1200px) {
    margin-top: 20px;
    font-size: 7vw;
    border-image: none;
      
  }
`;

export const NavSection = styled.div`
  position: absolute;
  width: 500px;
  top: 324px;
  right: 50%;
  z-index: 1;
  transform: translate(50%, -50%)
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1200px) {
    flex: 0 0 40%;
    align-items: center
  }
`;

export const BottomWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    flex-direction: row-reverse;
      flex-wrap: wrap-reverse;
  }
`;
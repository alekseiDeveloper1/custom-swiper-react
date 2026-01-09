import styled from 'styled-components';

export const SubSliderContainer = styled.div`
  position: relative;
  width: 650px;
  margin: 56px 100px;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 90%;
    margin: 5px;
  }
`;
export const SubSlide = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  p {
    margin: 0;
    font-size: 0.875rem;
  }
`;
import styled from 'styled-components';

export const NavContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.sizes.circle}px;
  height: ${({ theme }) => theme.sizes.circle}px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-top: 2rem;
    transform: scale(0.8);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transform: scale(0.6);
  }
`;

export const RotatingRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.8s;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    border-radius: 50%;
    border: 1px dashed rgba(255, 255, 255, 0.1);
  }
`;

export const NavItemWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ theme }) => theme.sizes.item}px;
  height: ${({ theme }) => theme.sizes.item}px;
  margin-top: -${({ theme }) => theme.sizes.item / 2}px;
  margin-left: -${({ theme }) => theme.sizes.item / 2}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CounterRotator = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.8s;
`;

export const NavNumber = styled.div`
  font-size: inherit;
  font-weight: 800;
  line-height: 1;
  cursor: pointer;
`;
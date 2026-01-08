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

export const NavItemContent = styled.div<{isActive:boolean, title:string}>`
  position: relative;
  box-sizing: border-box;
  min-width: ${props => props.isActive ? '56px' : '8px'};
  min-height: ${props => props.isActive ? '56px' : '8px'};
  font-size: ${props => props.isActive ? '1.2rem' : '0px'};
  background: ${props => props.isActive ? 'transparent' : props.theme.colors.borderDark};
  border-radius: 50%;
  color: ${props => props.theme.colors.borderDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  border: 1px solid ${props => props.theme.colors.borderDark};
  
  &:hover {
    font-size: 1.2rem;
    min-width: 56px;
    min-height: 56px;
    background: ${({ theme }) => theme.colors.white};
  }
  
  &::after {
    content: '${props => props.title}';
    display: ${props => props.isActive ? 'block' : 'none'};
    position: absolute;
    line-height: 56px;
    top: 0;
    left: 76px;
    width: 200px;
    color: ${({ theme }) => theme.colors.black};
  }
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
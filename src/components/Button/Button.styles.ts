import styled, { css } from 'styled-components';

interface StyledButtonProps {
  variant?: 'default' | 'circular';
  size?: 'small' | 'medium' | 'large';
  isActive?: boolean;
  title?: string;
}

const circularVariant = css<StyledButtonProps>`
  min-width: ${props => props.isActive ? '56px' : '8px'};
  min-height: ${props => props.isActive ? '56px' : '8px'};
  font-size: ${props => props.isActive ? '1.2rem' : '0px'};
  background: ${props => props.isActive ? 'transparent' : props.theme.colors.borderDark};
  border: 1px solid ${props => props.theme.colors.borderDark};
  color: ${props => props.theme.colors.borderDark};
  transition: all 0.5s ease;

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

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  /* Default styles */
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  /* Variant styles */
  ${({ variant }) => variant === 'circular' && circularVariant}
`;

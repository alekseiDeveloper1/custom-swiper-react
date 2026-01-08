import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'circular';
  size?: 'small' | 'medium' | 'large';
  isActive?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (
    {
      children,
      ...props
    }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

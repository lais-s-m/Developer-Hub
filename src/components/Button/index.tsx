import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  bgColor: string;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  bgColor,
  children,
  ...rest
}) => (
  <StyledButton size={size} bgColor={bgColor} {...rest}>
    {children}
  </StyledButton>
);

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container, ButtonColorVariation } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: ButtonColorVariation;
}

const Button = ({ children, color, ...rest }: ButtonProps): JSX.Element => (
  <Container color={color} {...rest}>
    {children}
  </Container>
);

export default Button;

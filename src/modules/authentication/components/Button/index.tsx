import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { shade } from 'polished';
import styled from 'styled-components';

const Container = styled.button`
  background-color: #ffa027;
  border-radius: 10px;
  width: 100%;
  line-height: 5rem;
  font-size: 1.4rem;
  border: 0;
  color: #312e38;
  margin-top: 2rem;
  font-family: 'Comfortaa', 'Roboto', serif;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${shade(0.2, '#ffa027')};
  }

  &:active {
    background-color: #ffa027;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps): JSX.Element => (
  <Container {...rest}>{children}</Container>
);

export default Button;

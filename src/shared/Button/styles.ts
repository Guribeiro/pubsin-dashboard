import { shade } from 'polished';
import styled, { css } from 'styled-components';

export type ButtonColorVariation = 'red' | 'blue' | 'green' | 'dark';

interface ContainerProps {
  color?: ButtonColorVariation;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${({ theme }) => theme.button.default};

  &:hover {
    background-color: ${({ theme }) => shade(0.2, theme.button.default)};
  }
  &:active {
    background-color: ${({ theme }) => theme.button.default};
  }

  ${({ color }) =>
    color === 'red' &&
    css`
      background-color: ${({ theme }) => theme.button.red};
      &:hover {
        background-color: ${({ theme }) => shade(0.2, theme.button.red)};
      }
      &:active {
        background-color: ${({ theme }) => theme.button.red};
      }
    `}
  ${({ color }) =>
    color === 'blue' &&
    css`
      background-color: ${({ theme }) => theme.button.blue};

      &:hover {
        background-color: ${({ theme }) => shade(0.2, theme.button.blue)};
      }
      &:active {
        background-color: ${({ theme }) => theme.button.blue};
      }
    `}
  ${({ color }) =>
    color === 'green' &&
    css`
      background-color: ${({ theme }) => theme.button.green};
      &:hover {
        background-color: ${({ theme }) => shade(0.2, theme.button.green)};
      }
      &:active {
        background-color: ${({ theme }) => theme.button.green};
      }
    `}
  ${({ color }) =>
    color === 'dark' &&
    css`
      background-color: ${({ theme }) => theme.button.dark};
      &:hover {
        background-color: ${({ theme }) => shade(0.2, theme.button.dark)};
      }
      &:active {
        background-color: ${({ theme }) => theme.button.dark};
      }
    `}

  border-radius: 10px;
  width: 100%;
  line-height: 5rem;
  font-size: 1.4rem;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 2rem;
  font-family: 'Comfortaa', 'Roboto', serif;
  transition: background-color 0.2s ease;
`;

import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    max-width: 50rem;
    max-height: 50rem;
    height: 100%;
    width: 100%;
  }

  a {
    text-align: center;
    background-color: ${({ theme }) => theme.button.default};
    border-radius: 10px;
    width: 100%;
    max-width: 28rem;
    line-height: 5rem;
    font-size: 1.4rem;
    margin-top: 4rem;
    border: 0;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Comfortaa', 'Roboto', serif;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => shade(0.2, theme.button.default)};
    }

    &:active {
      background-color: ${({ theme }) => theme.button.default};
    }
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.header`
  padding: 1.4rem 4rem;
  background: ${({ theme }) => theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SignInButton = styled(Link)`
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Comfortaa', 'Roboto', serif;
  font-weight: 700;
  background: #ffa027;
  padding: 0 4.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${shade(0.2, '#ffa027')};
  }

  &:active {
    background-color: #ffa027;
  }
`;

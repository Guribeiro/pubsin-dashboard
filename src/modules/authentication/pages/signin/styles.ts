import styled from 'styled-components';
import { shade } from 'polished';
import { Form } from '@unform/web';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  header {
    padding: 3rem 4rem 0;
    align-self: flex-start;

    > button {
      align-self: flex-start;
    }
  }
`;

export const FormSignIn = styled(Form)`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  margin: 6rem auto 0;
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }
`;

export const Content = styled.section`
  margin-top: 4rem;
  align-items: center;
  width: 100%;

  a {
    margin-top: 2rem;
    color: #ffffff;

    transition: color 0.2s ease;

    &:hover {
      color: ${shade(0.2, '#F5F5F5')};
      text-decoration: underline;
    }
  }
`;

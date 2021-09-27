import styled from 'styled-components';

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 0 4rem;
  text-align: center;
`;

export const Content = styled.div`
  border-bottom: 0.5px solid #e9e9e9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-family: 'Comfortaa', 'Roboto', sans-serif;
  color: #f3e8ee;
  text-align: center;
  max-width: 1200px;
  width: 100%;
`;

export const Image = styled.img`
  max-width: 600px;
  width: 100%;
`;

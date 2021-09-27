import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background-color: #1b1b1d;
  padding: 0 16px;
  border-radius: 10px;
  margin-top: 8px;
  border: 2px solid transparent;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border: 2px solid #ffa027; ;
    `}

  input {
    background: transparent;
    border: 0;
    line-height: 5rem;
    font-size: 1.4rem;
    color: #f5f5f5;
    margin-left: 16px;
    flex: 1;

    ::placeholder {
      font-weight: 700;
    }
  }
`;

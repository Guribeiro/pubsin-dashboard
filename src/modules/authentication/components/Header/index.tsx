import React from 'react';
import styled from 'styled-components';
import { shade } from 'polished';

import { Link } from 'react-router-dom';
import { Container, SignInButton } from './styles';

import SmallLogo from '../../../../assets/logo.png';

const MenuBar = styled.div`
  line-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegistrationButton = styled(Link)`
  color: #ffffff;
  padding: 0 4.5rem;

  &:hover {
    color: ${shade(0.2, '#FFFFFF')};
  }
`;

const Header = (): JSX.Element => (
  <Container>
    <Link to="/">
      <img src={SmallLogo} alt="PubsIn Logo" />
    </Link>
    <MenuBar>
      <RegistrationButton to="/signup">Cadastrar</RegistrationButton>
      <SignInButton to="/signin">Login</SignInButton>
    </MenuBar>
  </Container>
);

export default Header;

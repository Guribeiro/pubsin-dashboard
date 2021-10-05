import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '@/assets/page-notfound.png';
import { Container } from './styles';

interface NotFoundProps {
  isPrivate?: boolean;
}

const NotFound = ({ isPrivate }: NotFoundProps): JSX.Element => (
  <>
    {isPrivate ? (
      <Container>
        <img src={NotFoundImage} alt="page not found" />
        <Link to="/dashboard">Voltar para o dashboard</Link>
      </Container>
    ) : (
      <Container>
        <img src={NotFoundImage} alt="page not found" />
        <Link to="/">Voltar para o ínicio</Link>
      </Container>
    )}
  </>
);

export default NotFound;

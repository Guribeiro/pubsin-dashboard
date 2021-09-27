import React from 'react';
import { Container, Content, Title, Image } from './styles';

interface BannerProps {
  title: string;
  image: string;
}

const Banner = ({ title, image }: BannerProps): JSX.Element => (
  <Container>
    <Content>
      <Title>{title}</Title>
      <Image src={image} />
    </Content>
  </Container>
);

export default Banner;

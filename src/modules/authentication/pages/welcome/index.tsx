import React from 'react';
import styled from 'styled-components';

import Banner from '../../components/Banner';
import Header from '../../components/Header';

import CelebrationBackgroundImage from '../../../../assets/celebration.png';
import HalloweenBackgroundImage from '../../../../assets/halloween.png';
import ContentBackgroundImage from '../../../../assets/content.png';

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
`;

const Welcome = (): JSX.Element => (
  <>
    <Header />
    <Container>
      <Banner
        title="Mostre as pessoas o que o seu negócio tem a oferecer"
        image={CelebrationBackgroundImage}
      />
      <Banner
        title="Publique novidades e eventos especiais"
        image={HalloweenBackgroundImage}
      />
      <Banner
        title="Gerencie seus posts e deixe que as pessoas saibam mais sobre suas promoções e atrações da noite"
        image={ContentBackgroundImage}
      />
    </Container>
  </>
);
export default Welcome;

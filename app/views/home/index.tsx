import React from 'react';
import IsEqual from 'react-fast-compare';
import { Container, Description } from './styles';

function HomeView(): JSX.Element {
  return (
    <Container>
      <Description>Home</Description>
    </Container>
  );
}

export default React.memo(HomeView, IsEqual);

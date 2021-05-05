import React from 'react';
import IsEqual from 'react-fast-compare';
import { Container, Description } from './styles';

function NewsView(): JSX.Element {
  return (
    <Container>
      <Description>News</Description>
    </Container>
  );
}

export default React.memo(NewsView, IsEqual);

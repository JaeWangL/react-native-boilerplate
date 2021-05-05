import React from 'react';
import IsEqual from 'react-fast-compare';
import { Container, Description } from './styles';

function MarketsView(): JSX.Element {
  return (
    <Container>
      <Description>Markets</Description>
    </Container>
  );
}

export default React.memo(MarketsView, IsEqual);

import React from 'react';
import IsEqual from 'react-fast-compare';
import { Container, Description } from './styles';

function TotalAssetsView(): JSX.Element {
  return (
    <Container>
      <Description>Total Assets</Description>
    </Container>
  );
}

export default React.memo(TotalAssetsView, IsEqual);

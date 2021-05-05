import React from 'react';
import IsEqual from 'react-fast-compare';
import { Container, Description } from './styles';

function SettingsView(): JSX.Element {
  return (
    <Container>
      <Description>Settings</Description>
    </Container>
  );
}

export default React.memo(SettingsView, IsEqual);

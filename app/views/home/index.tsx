import React from 'react';
import IsEqual from 'react-fast-compare';
import { useTranslation } from 'react-i18next';
import { Container, Description } from './styles';

function HomeView(): JSX.Element {
  const [t] = useTranslation(['common']);

  return (
    <Container>
      <Description>{t('tabHome')}</Description>
    </Container>
  );
}

export default React.memo(HomeView, IsEqual);

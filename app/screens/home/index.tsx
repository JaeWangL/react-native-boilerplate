import React from 'react';
import IsEqual from 'react-fast-compare';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { styles } from './styles';

function HomeView(): JSX.Element {
  const [t] = useTranslation(['common']);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{t('tabHome')}</Text>
    </View>
  );
}

export default React.memo(HomeView, IsEqual);

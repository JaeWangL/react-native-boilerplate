import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { GlassBackground } from '@/components';
import { styles } from './styles';

function SettingsScreen(): JSX.Element {
  const [t] = useTranslation(['common']);

  return (
    <GlassBackground source={require('../../../assets/images/bg_main.png')}>
      <View style={styles.container}>
        <Text style={styles.description}>{t('common:tabSettings')}</Text>
      </View>
    </GlassBackground>
  );
}

export default memo(SettingsScreen, IsEqual);

import { memo, useCallback } from 'react';
import IsEqual from 'react-fast-compare';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';
import { GlassBackground, GradientText } from '@/components';
import { useSettingsStore } from '@/hooks';
import { styles } from './styles';

function HomeScreen(): JSX.Element {
  const { changeTabBadge } = useSettingsStore();
  const [t] = useTranslation(['common']);

  const onIncreasePress = useCallback(() => {
    changeTabBadge({ tabIndex: 0, count: 3 });
  }, []);

  return (
    <GlassBackground source={require('../../../assets/images/bg_main.png')}>
      <View style={styles.container}>
        <Text style={styles.description}>{t('common:tabHome')}</Text>
        <GradientText style={{ fontSize: 18 }} gradient={{ colors: ['red', 'blue'] }}>
          Basic Gradient Test
        </GradientText>
        <Button onPress={onIncreasePress} title="Increase Home Badge Count" />
      </View>
    </GlassBackground>
  );
}

export default memo(HomeScreen, IsEqual);

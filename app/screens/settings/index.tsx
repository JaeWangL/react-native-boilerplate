import React from 'react';
import IsEqual from 'react-fast-compare';
import { Text, View } from 'react-native';
import { styles } from './styles';

function HomeView(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Settings</Text>
    </View>
  );
}

export default React.memo(HomeView, IsEqual);

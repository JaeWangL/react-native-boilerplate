import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import AppNavigator from '@/navigation/app.navigator';
import { I18n } from '@/i18n';

enableScreens();

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  useEffect(() => {
    I18n.init();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from '@emotion/react';
import AppNavigator from '@/navigation/app.navigator';
import { darkheme, lightTheme } from '@/styles/theme';
import { I18n } from '@/i18n';

enableScreens();

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  useEffect(() => {
    I18n.init();
  }, []);

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkheme : lightTheme}>
      <SafeAreaProvider>
        <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
        <AppNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

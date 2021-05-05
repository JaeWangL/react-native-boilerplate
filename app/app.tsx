import 'react-native-gesture-handler';
import React from 'react';
import { useColorScheme, LogBox, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@emotion/react';
import AppNavigator from '@/navigation/app.navigator';
import { darkheme, lightTheme } from '@/styles/theme';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

function App(): JSX.Element {
  const colorScheme = useColorScheme();

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

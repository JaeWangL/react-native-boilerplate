import React from 'react';
import IsEqual from 'react-fast-compare';
import { NavigationContainer } from '@react-navigation/native';
import MainTabsNavigator from './main.navigator';

function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <MainTabsNavigator />
    </NavigationContainer>
  );
}

export default React.memo(AppNavigator, IsEqual);

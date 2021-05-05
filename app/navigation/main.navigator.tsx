import React from 'react';
import IsEqual from 'react-fast-compare';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabsParamList, ViewTypes } from '@/configs';
import { HomeView, MarketsView, NewsView, SettingsView, TotalAssetsView } from '@/views';

// TODO: Add 'Tabbar is visible when only in root view' features
const ROOT_ROUTES: string[] = [
  ViewTypes.HOME,
  ViewTypes.MARKETS,
  ViewTypes.TOTAL_ASSETS,
  ViewTypes.NEWS,
  ViewTypes.SETTINGS,
];
const BottomTab = createBottomTabNavigator<MainTabsParamList>();

function MainTabsNavigator(): JSX.Element {
  return (
    <BottomTab.Navigator initialRouteName={ViewTypes.HOME}>
      <BottomTab.Screen name={ViewTypes.HOME} component={HomeView} />
      <BottomTab.Screen name={ViewTypes.MARKETS} component={MarketsView} />
      <BottomTab.Screen name={ViewTypes.TOTAL_ASSETS} component={TotalAssetsView} />
      <BottomTab.Screen name={ViewTypes.NEWS} component={NewsView} />
      <BottomTab.Screen name={ViewTypes.SETTINGS} component={SettingsView} />
    </BottomTab.Navigator>
  );
}

export default React.memo(MainTabsNavigator, IsEqual);

import React from 'react';
import IsEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/*
import TabDiet from '@assets/icons/ic_tab_diet.svg';
import TabHome from '@assets/icons/ic_tab_home.svg';
import TabNotices from '@assets/icons/ic_tab_notices.svg';
import TabShuttle from '@assets/icons/ic_tab_shuttle.svg';
import TabSettings from '@assets/icons/ic_tab_settings.svg';
*/
import { MainTabsParamList, ViewTypes } from '@/configs';
import { HomeView, MarketsView, NewsView, SettingsView, TotalAssetsView } from '@/screens';
import { defaultTheme } from '@/styles';
import TabDiet from '../../assets/icons/ic_tab_diet.svg';
import TabHome from '../../assets/icons/ic_tab_home.svg';
import TabNotices from '../../assets/icons/ic_tab_notices.svg';
import TabShuttle from '../../assets/icons/ic_tab_shuttle.svg';
import TabSettings from '../../assets/icons/ic_tab_settings.svg';

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
    <BottomTab.Navigator
      initialRouteName={ViewTypes.HOME}
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: defaultTheme.colors.primary,
        tabBarInactiveTintColor: defaultTheme.colors.gray400,
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
          <BlurView
            blurType="light"
            blurAmount={100}
            style={StyleSheet.absoluteFill}
            overlayColor="rgba(0, 0, 0, 0.8)"
          />
        ),
      }}>
      <BottomTab.Screen
        name={ViewTypes.HOME}
        component={HomeView}
        options={{
          tabBarIcon: ({ focused, color }) => <TabHome height={26} width={26} fill={color} />,
        }}
      />
      <BottomTab.Screen
        name={ViewTypes.MARKETS}
        s
        component={MarketsView}
        options={{ tabBarIcon: (focused) => <TabShuttle height={24} width={24} /> }}
      />
      <BottomTab.Screen
        name={ViewTypes.TOTAL_ASSETS}
        component={TotalAssetsView}
        options={{ tabBarIcon: (focused) => <TabDiet height={24} width={24} /> }}
      />
      <BottomTab.Screen
        name={ViewTypes.NEWS}
        component={NewsView}
        options={{ tabBarIcon: (focused) => <TabNotices height={24} width={24} /> }}
      />
      <BottomTab.Screen
        name={ViewTypes.SETTINGS}
        component={SettingsView}
        options={{ tabBarIcon: (focused) => <TabSettings height={24} width={24} /> }}
      />
    </BottomTab.Navigator>
  );
}

export default React.memo(MainTabsNavigator, IsEqual);

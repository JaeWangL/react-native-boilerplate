import { memo, useCallback, ReactNode } from 'react';
import IsEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabbarIcon } from '@/components';
import { MainTabsParamList, ViewTypes } from '@/configs';
import { HomeView, MarketsView, NewsView, SettingsView, TotalAssetsView } from '@/screens';
import { defaultTheme } from '@/styles';

const BottomTab = createBottomTabNavigator<MainTabsParamList>();

function MainTabsNavigator(): JSX.Element {
  const renderTabbarBG = useCallback((): ReactNode => {
    return <BlurView blurType="light" style={StyleSheet.absoluteFill} />;
  }, []);

  return (
    <BottomTab.Navigator
      initialRouteName={ViewTypes.HOME}
      screenOptions={{
        tabBarActiveTintColor: defaultTheme.colors.primary,
        tabBarInactiveTintColor: defaultTheme.colors.gray400,
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: renderTabbarBG,
      }}>
      <BottomTab.Screen
        name={ViewTypes.HOME}
        component={HomeView}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color }) => <TabbarIcon type="home" focused={focused} color={color} />,
        }}
      />
      <BottomTab.Screen
        name={ViewTypes.SHUTTLE}
        component={MarketsView}
        options={{ tabBarIcon: ({ focused, color }) => <TabbarIcon type="shuttle" focused={focused} color={color} /> }}
      />
      <BottomTab.Screen
        name={ViewTypes.DIET}
        component={TotalAssetsView}
        options={{ tabBarIcon: ({ focused, color }) => <TabbarIcon type="diet" focused={focused} color={color} /> }}
      />
      <BottomTab.Screen
        name={ViewTypes.NOTICES}
        component={NewsView}
        options={{ tabBarIcon: ({ focused, color }) => <TabbarIcon type="notices" focused={focused} color={color} /> }}
      />
      <BottomTab.Screen
        name={ViewTypes.SETTINGS}
        component={SettingsView}
        options={{ tabBarIcon: ({ focused, color }) => <TabbarIcon type="settings" focused={focused} color={color} /> }}
      />
    </BottomTab.Navigator>
  );
}

export default memo(MainTabsNavigator, IsEqual);

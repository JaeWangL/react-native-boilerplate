import { memo, useCallback, ReactNode } from 'react';
import IsEqual from 'react-fast-compare';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabbarIcon } from '@/components';
import { MainTabsParamList, ViewTypes } from '@/configs';
import { useSettingsStore } from '@/hooks';
import { DietScreen, HomeScreen, NoticesScreen, SettingsScreen, ShuttleScreen } from '@/screens';
import { defaultTheme } from '@/styles';
import { styles } from './styles';

const BottomTab = createBottomTabNavigator<MainTabsParamList>();

function MainTabsNavigator(): JSX.Element {
  const { settings } = useSettingsStore();
  const [t] = useTranslation(['common']);

  const renderTabbarBG = useCallback((): ReactNode => {
    return <BlurView blurType="light" blurRadius={25} style={StyleSheet.absoluteFill} />;
  }, []);

  return (
    <BottomTab.Navigator
      initialRouteName={ViewTypes.HOME}
      screenOptions={{
        tabBarActiveTintColor: defaultTheme.colors.primary,
        tabBarInactiveTintColor: defaultTheme.colors.gray400,
        tabBarStyle: styles.bottomTab,
        tabBarBackground: renderTabbarBG,
      }}>
      <BottomTab.Screen
        name={ViewTypes.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: t('common:tabHome'),
          tabBarIcon: ({ focused, color }) => <TabbarIcon type="home" focused={focused} color={color} />,
          tabBarBadge: settings.badges[0].badgeCount !== 0 ? settings.badges[0].badgeCount : undefined,
        }}
      />
      <BottomTab.Screen
        name={ViewTypes.SHUTTLE}
        component={ShuttleScreen}
        options={{
          tabBarLabel: t('common:tabShuttle'),
          tabBarIcon: ({ focused, color }) => <TabbarIcon type="shuttle" focused={focused} color={color} />,
          tabBarBadge: settings.badges[1].badgeCount !== 0 ? settings.badges[1].badgeCount : undefined,
        }}
      />
      <BottomTab.Screen
        name={ViewTypes.DIET}
        component={DietScreen}
        options={{
          tabBarLabel: t('common:tabDiet'),
          tabBarIcon: ({ focused, color }) => <TabbarIcon type="diet" focused={focused} color={color} />,
          tabBarBadge: settings.badges[2].badgeCount !== 0 ? settings.badges[2].badgeCount : undefined,
        }}
      />
      <BottomTab.Screen
        name={ViewTypes.NOTICES}
        component={NoticesScreen}
        options={{
          tabBarLabel: t('common:tabNotices'),
          tabBarIcon: ({ focused, color }) => <TabbarIcon type="notices" focused={focused} color={color} />,
          tabBarBadge: settings.badges[3].badgeCount !== 0 ? settings.badges[3].badgeCount : undefined,
        }}
      />
      <BottomTab.Screen
        name={ViewTypes.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarLabel: t('common:tabSettings'),
          tabBarIcon: ({ focused, color }) => <TabbarIcon type="settings" focused={focused} color={color} />,
          tabBarBadge: settings.badges[4].badgeCount !== 0 ? settings.badges[4].badgeCount : undefined,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default memo(MainTabsNavigator, IsEqual);

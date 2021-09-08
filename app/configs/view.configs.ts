export enum ViewTypes {
  HOME = 'Home',
  SHUTTLE = 'Shuttle',
  DIET = 'Diet',
  NOTICES = 'Notices',
  SETTINGS = 'Settings',
}

export type MainTabsParamList = {
  [ViewTypes.HOME]: undefined;
  [ViewTypes.SHUTTLE]: undefined;
  [ViewTypes.DIET]: undefined;
  [ViewTypes.NOTICES]: undefined;
  [ViewTypes.SETTINGS]: undefined;
};

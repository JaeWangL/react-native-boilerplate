export enum ViewTypes {
  HOME = 'Home',
  MARKETS = 'Markets',
  TOTAL_ASSETS = 'TotalAssets',
  NEWS = 'News',
  SETTINGS = 'Settings',
}

export type MainTabsParamList = {
  [ViewTypes.HOME]: undefined;
  [ViewTypes.MARKETS]: undefined;
  [ViewTypes.TOTAL_ASSETS]: undefined;
  [ViewTypes.NEWS]: undefined;
  [ViewTypes.SETTINGS]: undefined;
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TabBadgeItem } from './interfaces';
import { ChangeTabBadgePayload, SetTabBadgePayload } from './payloads';

export type SettingsState = {
  badges: TabBadgeItem[];
};

const initialState: SettingsState = {
  badges: [
    {
      tabIndex: 0,
      badgeCount: 0,
    },
    {
      tabIndex: 1,
      badgeCount: 0,
    },
    {
      tabIndex: 2,
      badgeCount: 0,
    },
    {
      tabIndex: 3,
      badgeCount: 0,
    },
    {
      tabIndex: 4,
      badgeCount: 0,
    },
  ],
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeBadge: (state, { payload }: PayloadAction<ChangeTabBadgePayload>) => {},
    setBadge: (state, { payload }: PayloadAction<SetTabBadgePayload>) => {
      const updatedItems = state.badges.map((b) =>
        b.tabIndex === payload.tabIndex
          ? ({ tabIndex: payload.tabIndex, badgeCount: payload.count } as TabBadgeItem)
          : b,
      );
      state.badges = updatedItems;
    },
  },
});

export const settingsName = slice.name;
export const settingsReducer = slice.reducer;
export const { changeBadge, setBadge } = slice.actions;
export type SettingsActionsWithPayload = typeof setBadge;
export type SettingsActions = ReturnType<SettingsActionsWithPayload>;

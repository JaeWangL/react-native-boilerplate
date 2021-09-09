import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducers';
import { ChangeTabBadgePayload } from '@/redux/settings/payloads';
import { changeBadge, SettingsActions, SettingsState } from '@/redux/settings/slice';

export interface SettingsStore {
  settings: SettingsState;
  changeTabBadge: (payload: ChangeTabBadgePayload) => SettingsActions;
}

export const useSettingsStore = (): SettingsStore => {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  const changeBadgeDispatch = useCallback(
    (payload: ChangeTabBadgePayload) => dispatch(changeBadge(payload)),
    [dispatch],
  );

  return {
    settings,
    changeTabBadge: changeBadgeDispatch,
  };
};

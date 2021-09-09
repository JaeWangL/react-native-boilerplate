import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import { RootActions } from './rootActions';
import { rootEpics } from './rootEpics';
import { rootReducers, RootState } from './rootReducers';

export interface EpicStore extends Store {
  epicTask?: any;
}

export const makeStore = (): Store => {
  const epicMiddleware = createEpicMiddleware<RootActions, RootActions, RootState>();
  const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(epicMiddleware)));

  (store as EpicStore).epicTask = epicMiddleware.run(rootEpics);

  return store;
};

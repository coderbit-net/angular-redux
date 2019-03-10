import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './core.reducers';
import { featureOne } from '../modules/featureOne/featureOne.types';

const middlewares = [createLogger()];
const predefinedState = {};

export const store: Store = createStore(
  rootReducer,
  predefinedState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export interface appState {
  featureOne: featureOne;
}

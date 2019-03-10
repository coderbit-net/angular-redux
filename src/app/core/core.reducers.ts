import { combineReducers } from 'redux';
import featureOneReducer from '../modules/feature-one/feature-one.reducer';

export default combineReducers({
  featureOne: featureOneReducer
});

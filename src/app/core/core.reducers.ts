import { combineReducers } from 'redux';
import featureOneReducer from '../modules/featureOne/featureOne.reducer';

export default combineReducers({
  featureOne: featureOneReducer
});

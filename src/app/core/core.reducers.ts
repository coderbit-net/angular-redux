import { combineReducers } from 'redux';
import featureOneReducer from '../modules/feature-one/redux/feature-one.reducer';

export default combineReducers({
  featureOne: featureOneReducer
});

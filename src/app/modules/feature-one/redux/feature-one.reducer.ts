import { featureOne, FEATURE_ONE_TRIGGERED } from '../feature-one.types';

const initialState: featureOne = {
  clicked: false,
  timestamp: null
};

export default function reducer(state = initialState, action: any): featureOne {
  switch (action.type) {
    case FEATURE_ONE_TRIGGERED: {
      return {
        ...state,
        clicked: true,
        timestamp: new Date()
      };
    }

    default:
      return state;
  }
}

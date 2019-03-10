import { featureOne } from './feature-two.types';

const initialState: featureOne = {
  customized: false,
  message: 'Redux in use!',
  checksum: null
};

export default function reducer(state = initialState, action: any): featureOne {
  switch (action.type) {
    default:
      return state;
  }
}

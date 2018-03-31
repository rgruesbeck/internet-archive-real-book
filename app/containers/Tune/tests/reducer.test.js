
import { fromJS } from 'immutable';
import tuneReducer from '../reducer';

describe('tuneReducer', () => {
  it('returns the initial state', () => {
    expect(tuneReducer(undefined, {})).toEqual(fromJS({}));
  });
});

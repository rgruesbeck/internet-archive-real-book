/*
 *
 * Search reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_QUERY,
  SUBMIT_QUERY,
} from './constants';

const initialState = fromJS({});

function searchReducer(state = initialState, action) {
  switch (action.type) {
  case CHANGE_QUERY:
    return state
      .set('query', action.query);
  default:
    return state;
  }
}

export default searchReducer;

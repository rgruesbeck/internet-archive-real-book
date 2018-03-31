/*
 *
 * Search actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_QUERY,
  SUBMIT_QUERY,
  SELECT_TUNE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeQuery(query) {
  return {
    type: CHANGE_QUERY,
    query,
  };
}

export function submitQuery() {
  return {
    type: SUBMIT_QUERY,
  };
}

export function selectTune(id) {
  return {
    type: SELECT_TUNE,
    id,
  };
}

/*
 *
 * Search actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_SEARCH,
  SUBMIT_SEARCH,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeSearch() {
  return {
    type: CHANGE_SEARCH,
  };
}

export function submitSearch() {
  return {
    type: SUBMIT_SEARCH,
  };
}

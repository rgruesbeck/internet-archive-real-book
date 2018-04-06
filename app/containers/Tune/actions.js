/*
 *
 * Tune actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_TUNES,
  LOAD_TUNES_SUCCESS,
  LOAD_TUNES_ERROR,
} from './constants';

export function loadTunes() {
  return {
    type: LOAD_TUNES,
  };
}

export function tunesLoaded(tunes) {
  return {
    type: LOAD_TUNES_SUCCESS,
    tunes
  };
}

export function tuneLoadingError(error) {
  return {
    type: LOAD_TUNES_ERROR,
    error
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

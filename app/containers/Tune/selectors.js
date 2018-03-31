import { createSelector } from 'reselect';

/**
 * Direct selector to the tune state domain
 */
const selectTuneDomain = (state) => state.get('tune');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tune
 */

const makeSelectTune = () => createSelector(
  selectTuneDomain,
  (substate) => substate.toJS()
);

export default makeSelectTune;
export {
  selectTuneDomain,
};

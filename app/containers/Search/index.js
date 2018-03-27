/**
 *
 * Search
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSearch from './selectors';
import reducer from './reducer';
import saga from './saga';

import SearchBar from 'components/SearchBar';
import SearchInput from 'components/SearchInput';
import SearchButton from 'components/SearchButton';

export class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <SearchBar
          innerRef={x => { this.input = x; }}
          onMouseEnter={() => { this.input.focus(); }}
        />
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  search: makeSelectSearch(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'search', reducer });
const withSaga = injectSaga({ key: 'search', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Search);

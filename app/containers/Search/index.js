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
import { push } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  changeQuery,
  submitQuery,
  selectTune,
} from './actions';
import reducer from './reducer';
import makeSelectSearch from './selectors';
import saga from './saga';

import SearchBar from 'components/SearchBar';
import SearchResults from 'components/SearchResults';


export class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <SearchBar
          onChange={this.props.onChangeQuery}
          onSubmit={this.props.onSubmitQuery}
        />
        <SearchResults
          search={this.props.search}
          onSelect={this.props.onSelectTune}
        />
      </div>
    );
  }
}

Search.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
  query: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  search: makeSelectSearch(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeQuery: (evt) => dispatch(changeQuery(evt.target.value)),
    onSelectTune: (evt) => dispatch(push('/tunes/#' + evt.currentTarget.dataset.id.toLowerCase().replace(/ /g, '-'))),
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

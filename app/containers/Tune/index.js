/**
 *
 * Tune
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import styled from 'styled-components';

import IpfsGateWay from 'utils/ipfsGateWay';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTune from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import NavButtonSearch from 'components/NavButtonSearch';

const TuneDisplay = styled.img`
  width: 100%;
`;

export class Tune extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    let hash = this.props.location.hash;
    let db = JSON.parse(localStorage.getItem('tunedb'));
    let tune = db.find((t) => {
      let re = new RegExp(hash.replace('#', ''), 'i');
      return t.title.replace(/ /g, '-').match(re);
    });
    return (
      <div>
        <TuneDisplay src={tune.url} />
        <NavButtonSearch />
      </div>
    );
  }
}

Tune.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tune: makeSelectTune(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tune', reducer });
const withSaga = injectSaga({ key: 'tune', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Tune);

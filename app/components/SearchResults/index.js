/**
*
* SearchResults
*
*/

import React from 'react';
// import styled from 'styled-components';


class SearchResults extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ul>
          <li>
            Stella
          </li>
          <li>
            Invitation
          </li>
        </ul>
      </div>
    );
  }
}

SearchResults.propTypes = {

};

export default SearchResults;

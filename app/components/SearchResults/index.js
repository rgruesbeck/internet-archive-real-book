/**
*
* SearchResults
*
*/

import React from 'react';
import styled from 'styled-components';

const Results = styled.div`
  display: flex;
  font-size: 1.5rem;
  min-width: 15rem;
  max-width: 40rem;
  margin: 1rem auto;
  border: 1px solid rgba(0,0,128,0.15);
  border-top: 0px solid rgba(0,0,128,0.15);
`;

const TuneList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const TuneCard = styled.li`
  font-size: 1.5rem;
  color: navy;
  cursor: pointer;
  height: 6rem;
  padding: 0.75rem;
  border-top: 1px solid rgba(0,0,128,0.15);
  &:hover {
    box-shadow: 0 1px 3px rgba(0,0,128,0.26);
  }
`;


class SearchResults extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Results>
        <TuneList>
          <TuneCard>
            Stella
          </TuneCard>
          <TuneCard>
            Invitation
          </TuneCard>
        </TuneList>
      </Results>
    );
  }
}

SearchResults.propTypes = {

};

export default SearchResults;

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
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 0.75rem;
  border-top: 1px solid rgba(0,0,128,0.15);
  &:hover {
    box-shadow: 0 1px 3px rgba(0,0,128,0.26);
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }
  p {
    font-size: 1.25rem;
    font-weight: 300;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

class SearchResults extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let results = [
      'Stella',
      'Invitation',
      'What Is This Thing Called Love',
      'Have You Met Miss Jones',
    ].map( t => {
      return(
        <TuneCard>
          <h1>{t}</h1>
          <p>composer</p>
        </TuneCard>
      );
    });

    return (
      <Results>
        <TuneList>
          {results}
        </TuneList>
      </Results>
    );
  }
}

SearchResults.propTypes = {

};

export default SearchResults;

/**
 *
 * SearchResults
 *
 */

import React from 'react';
import styled from 'styled-components';
import IpfsGateWay from 'utils/ipfsGateWay';
import { Tune } from 'utils/api';

const Results = styled.div`
  display: flex;
  font-size: 1.5rem;
  min-width: 15rem;
  max-width: 40rem;
  margin: 1rem auto;
  opacity: ${(props) => props.disabled ? 0 : 1};
  transition: opacity 1s;
`;

const TuneList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  border-radius: 3px;
  border: 1px solid rgba(0,0,128,0.15);
`;

const Card = styled.li`
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
    text-transform: capitalize;
  }
  p {
    font-size: 1.25rem;
    font-weight: 300;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  &:first-child {
    border-top: 1px solid rgba(0,0,128,0);
  }
`;

function TuneCard({ id, title, booktitle, onSelect }) {
  return (
    <Card key={id} data-id={id} onClick={onSelect}>
      <h1>{title}</h1>
      <p>{booktitle}</p>
    </Card>
  );
}

class SearchResults extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    let query = this.props.search.query;
    let results = [].filter( t => {
      let re = new RegExp(query, 'i');
      return t.title.match(re);
    }).map((t, idx) => {
      //todo give tune cards proper ids
      let slug = Tune.slug(t);
      return(
        <TuneCard
          id={slug}
          title={t.title.toLowerCase()}
          booktitle={t.meta.book.title}
          onSelect={this.props.onSelect}
        />
      );
    });

    return (
      <Results disabled={results.length == 0 || query == ""}>
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

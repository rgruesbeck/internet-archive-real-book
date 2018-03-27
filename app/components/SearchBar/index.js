/*
*
* SearchBar
*
*/

import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  width: -webkit-fill-available;
  font-size: 1.5rem;
  min-width: 15rem;
  max-width: 40rem;
  margin: 1rem auto;
  border: 1px solid rgba(0,0,0,0.15);
  box-shadow: 0 2px 3px rgba(0,0,0,0.06);
  border-radius: 3px;
`;

const Input = styled.input.attrs({
  type: 'search',
})`
  width: -webkit-fill-available;
  display: inline-block;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  color: navy;
  height: 2.5rem;
  opacity: ${(props) => props.disabled ? 'not-allowed' : 'auto'};
  background-color: white;
  opacity: ${(props) => props.disabled ? 0.50 : 1};
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  display: inline-block;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  min-width: 3rem;
  color: #152935;
  height: inherit;
  opacity: ${(props) => props.disabled ? 'not-allowed' : 'auto'};
  background-color: white;
  opacity: ${(props) => props.disabled ? 0.50 : 1};
  cursor: pointer;
  &:hover {
    background-color: navy;
  }
`;

function SearchBar() {
  return (
    <Bar>
      <Input
        placeholder="Search"
      />
      <Button
      />
    </Bar>
  );
}

SearchBar.propTypes = {
};

export default SearchBar;

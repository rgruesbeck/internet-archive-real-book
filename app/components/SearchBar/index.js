/*
*
* SearchBar
*
*/

import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  font-size: 1.5rem;
  max-width: 40rem;
  margin: 1rem auto;
  border: 1px solid rgba(0,0,128,0.15);
  box-shadow: 0 2px 3px rgba(0,0,128,0.06);
  border-radius: 3px;
  @media (max-width: 40rem) {
    margin: 1rem 1rem auto;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
})`
  flex: auto;
  width: 100%;
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
    color: navy;
    outline: none;
  }
`;

const Icon = ({ size = '1em', color = 'currentColor', title, children }) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <title>{title}</title>
    {children}
  </svg>
);

const Button = styled.button`
  flex: initial;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: navy;
  opacity: ${(props) => props.disabled ? 'not-allowed' : 'auto'};
  background-color: whitesmoke;
  opacity: ${(props) => props.disabled ? 0.50 : 1};
  cursor: pointer;
  &:hover {
    background-color: navy;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

function SearchBar({ onSubmit, onChange }) {
  return (
    <Bar>
      <Input
        onChange={onChange}
        placeholder="Search"
      />
      <Button
        onClick={onSubmit}
      >
        <Icon title="Search" size="1.5em">
          <path
            transform="translate(4, 4)"
            d="M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281c-1.125 0.984-2.625 1.547-4.219 1.547-3.609 0-6.516-2.859-6.516-6.469s2.906-6.516 6.516-6.516 6.469 2.906 6.469 6.516c0 1.594-0.563 3.094-1.547 4.219l0.281 0.281h0.797z" />
        </Icon>
      </Button>
    </Bar>
  );
}

SearchBar.propTypes = {
};

export default SearchBar;

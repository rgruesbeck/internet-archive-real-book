/**
*
* NavButtonSearch
*
*/

import React from 'react';
import styled from 'styled-components';
import { push } from 'react-router-redux';


const Button = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  height: 2.75rem;
  width: 2.75rem;
  background-color: white;
  color: navy;
  border: 1px solid rgba(0,0,128,0.15);
  box-shadow: 0 2px 3px rgba(0,0,128,0.06);
  border-radius: 100%;
  &:hover {
    box-shadow: 0 1px 3px rgba(0,0,128,0.26);
  }
  &:focus {
    outline: none;
  }
`;

const Icon = ({ size = '1em', color = 'currentColor', title, children }) => (
    <svg width={size} height={size} viewBox="0 0 32 32">
    <title>{title}</title>
    {children}
    <style jsx>{`
    svg {
      display: block;
      margin: auto;
      vertical-align: middle;
      fill: ${color};
    }
    `}</style>
    </svg>
);

function NavButtonSearch() {
  return (
    <Button>
      <a href="/">
        <Icon title="Search" size="1.5em">
          <path
            transform="translate(4, 4)"
            d="M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281c-1.125 0.984-2.625 1.547-4.219 1.547-3.609 0-6.516-2.859-6.516-6.469s2.906-6.516 6.516-6.516 6.469 2.906 6.469 6.516c0 1.594-0.563 3.094-1.547 4.219l0.281 0.281h0.797z" />
        </Icon>
      </a>
    </Button>
  );
}

NavButtonSearch.propTypes = {

};

export default NavButtonSearch;

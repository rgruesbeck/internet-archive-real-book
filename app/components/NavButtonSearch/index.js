/**
*
* NavButtonSearch
*
*/

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
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

function NavButtonSearch() {
  return (
    <Button>
      S
    </Button>
  );
}

NavButtonSearch.propTypes = {

};

export default NavButtonSearch;

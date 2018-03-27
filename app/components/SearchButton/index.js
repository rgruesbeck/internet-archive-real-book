/**
*
* SearchButton
*
*/

import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchButton = styled.button.attrs({
  type: 'search',
})`
  font-size: 0.875rem;
  display: inline;
  height: 2.5rem;
  width: -webkit-fill-available;
  min-width: 15rem;
  padding: 1rem;
  margin: 1rem;
  color: #152935;
  opacity: ${(props) => props.disabled ? 'not-allowed' : 'auto'};
  background-color: white;
  border: 1px solid transparent;
  border-radius: 3px;
  opacity: ${(props) => props.disabled ? 0.50 : 1};
`;

SearchButton.propTypes = {
  id: PropTypes.string,
};

SearchButton.defaultProps = {
};

export default SearchButton;

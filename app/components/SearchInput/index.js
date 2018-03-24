/**
*
* SearchInput
*
*/

import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchInput = styled.input.attrs({
  type: 'text',
})`
  font-size: 0.875rem;
  display: block;
  height: 2.5rem;
  width: 100%;
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

SearchInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
};

export default SearchInput;

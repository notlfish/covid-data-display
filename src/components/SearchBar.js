import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ handleChange }) => {
  const [keyword, setKeyword] = useState('');

  const handleTextChange = (e) => {
    setKeyword((state) => e.target.value);
    handleChange(e);
  };

  return (
    <div>
      <input
        className="input-title"
        type="text"
        placeholder="Type to search for a country by name"
        name="searchKeyword"
        value={keyword}
        onChange={handleTextChange}
      />
    </div>
  );
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
}

export default SearchBar;

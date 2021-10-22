import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoSearch } from 'react-icons/io5';
import styles from './searchbar.module.css';

const SearchBar = ({ handleChange }) => {
  const [keyword, setKeyword] = useState('');

  const handleTextChange = (e) => {
    setKeyword(() => e.target.value);
    handleChange(e);
  };

  return (
    <div className={`${styles.searchBarContainer} bg-main-pink`}>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Type to search for a country by name"
          name="searchKeyword"
          value={keyword}
          onChange={handleTextChange}
        />
        <IoSearch />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;

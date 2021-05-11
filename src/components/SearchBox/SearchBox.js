import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './SearchBox.module.scss';

const SearchBox = ({ placeholder, value, onSubmit, onChange }) => {
  return (
    <form className={styles.searchBox} onSubmit={onSubmit}>
      <input
        className={styles.textInput}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button type="submit" className={styles.submitBtn}>
        <FontAwesomeIcon icon={faSearch} size="2x" color="#FFF" />
      </button>
    </form>
  );
};

export default SearchBox;

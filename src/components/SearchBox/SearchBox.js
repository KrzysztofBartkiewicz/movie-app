import React from 'react';
import loupeIcon from '../../assets/icons/loupe.svg';
import styles from './SearchBox.module.scss';

function SearchBox({ placeholder, value, handleSubmit, handleChange }) {
  return (
    <form className={styles.searchBox} onSubmit={handleSubmit}>
      <input
        className={styles.textInput}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button type="submit" className={styles.submitBtn}>
        <img src={loupeIcon} alt="search" />
      </button>
    </form>
  );
}

export default SearchBox;

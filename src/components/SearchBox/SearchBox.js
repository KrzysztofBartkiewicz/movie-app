import React from 'react';
import loupeIcon from '../../assets/icons/loupe.svg';
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
        <img src={loupeIcon} alt="search" />
      </button>
    </form>
  );
};

export default SearchBox;

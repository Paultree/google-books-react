import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ handleChange, input, handleSubmit, isClicked }) => {
  const classes = isClicked
    ? [styles.SearchBar, styles.AfterClick]
    : [styles.SearchBar, styles.BeforeClick];

  const headingClass = isClicked
    ? [styles.SearchBar_Header, styles.SearchBar_Header_After]
    : [styles.SearchBar_Header];

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className={`${classes.join(" ")}`}>
      <h1 className={`${headingClass.join(" ")}`} onClick={refreshPage}>
        Booki
      </h1>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <input
          className={styles.SearchForm_Input}
          placeholder="Please type name of the book here..."
          type="text"
          onChange={handleChange}
          value={input}
        />
        <button className={styles.SearchForm_Button} type="submit">
          Search
        </button>
      </form>
      <p>Search the world's most comprehensive index of full-text books.</p>
      <a href="#">My library</a>
    </div>
  );
};

export default SearchBar;

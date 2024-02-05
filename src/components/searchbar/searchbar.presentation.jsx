import React from "react";
import styles from "./searchbar.module.scss";

function SearchbarView(props) {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Enter a song title"
          value={props.searchbarText}
          onChange={props.handleInputChange}
        />
      </div>
    </div>
  );
}

export default SearchbarView;

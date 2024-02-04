import React from "react";
import styles from "./searchbar.module.scss";

function SearchbarView() {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Enter a song title"
        />
      </div>
    </div>
  );
}

export default SearchbarView;

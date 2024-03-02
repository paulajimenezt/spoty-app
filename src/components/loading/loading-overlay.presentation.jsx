import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "./loading-overlay.module.scss";

const LoadingOverlay = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingSpinner}>
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
    </div>
  );
};

export default LoadingOverlay;

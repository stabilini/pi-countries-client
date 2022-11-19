import React from "react";

import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {

    return (
    <div className={ styles.spinnerContainer }>
      <div className={ styles.spinnerLoading }></div>
    </div>
  );
}

export default LoadingSpinner;
import React from "react";
import styles from "./cssModule.module.css";

const CssModule = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>React Component Styling - CSS Module</h1>
      <p>
        <ul>
          <li>➕ Locale global scope. Specific for each components</li>
        </ul>
      </p>
    </div>
  );
};

export default CssModule;

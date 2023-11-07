import React from "react";
import styles from "./CopyRight.module.css";
const CopyRight = ({ logo }) => {
  return (
    <div className={styles.wrapper}>
      {logo && <img className={styles.logo} src="/images/logo.svg" alt="#" />}
      <p className={styles.text}>2022 MotionHaus.com All Rights Reserved</p>
    </div>
  );
};

export default CopyRight;

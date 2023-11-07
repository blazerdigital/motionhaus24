import React from "react";
import styles from "./HeadingAndInfo.module.css";

const HeadingAndInfo = () => {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <h3 className={styles.title}>HI, I'M JAROD!</h3>
        <p className={styles.text}>
          L.A. based <span className={styles.hightlightedText}>Filmmaker</span>
          for <span className={styles.hightlightedText}>Motion Graphics</span>,
          <span className={styles.hightlightedText}>VFX</span> and
          <span className={styles.hightlightedText}>Animation</span>. I work
          with agencies, organizations and brands. Welcome to my portfolio!
        </p>
      </div>
    </section>
  );
};

export default HeadingAndInfo;

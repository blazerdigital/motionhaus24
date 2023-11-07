import React from "react";
import SocialContainer from "../Navbar/SocialContainer/SocialContainer";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Collaborate</h3>
        <p className={styles.text}>
          Feel free to contact me for freelance projects, collaboration or just
          say hi at <br />
          <a
            href="mailto:collaborate@motionhaus.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.hightlightedText}>
              collaborate@motionhaus.com.
            </span>
          </a>
        </p>
      </div>

      <div className={styles.socialWrapper}>
        <SocialContainer />
        <p className={styles.tagline}>CURRENTLY AVAILABLE FOR FREELANCE</p>
      </div>
    </section>
  );
};

export default Footer;

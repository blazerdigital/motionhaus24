import React from "react";

import styles from "./style.module.css";
const SocialContainer = () => {
  const socialItem = [
    {
      icon: "/images/linkedin.svg",
      to: "https://www.linkedin.com/in/jarodsu/",
    },
    {
      icon: "/images/imdb.svg",
      to: "https://www.imdb.com/",
    },
    {
      icon: "/images/email.svg",
      to: "mailto:collaborate@motionhaus.com",
    },
  ];
  return (
    <div className={styles.socialContainer}>
      {socialItem.map((el, i) => (
        <a href={el.to} target="_blank" rel="noreferrer" key={i}>
          {" "}
          <img src={el.icon} alt="#" className={styles.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialContainer;

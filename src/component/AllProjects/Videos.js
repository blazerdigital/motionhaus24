import React from "react";
import { Link } from "react-router-dom";
import styles from "./Videos.module.css";

const Videos = ({ data }) => {
  return (
    <>
      <div className={styles.videoContainer}>
        {data.map((el, i) => (
          <Link to={`/${el.title}`} key={i}>
            <div className={styles.videoWrapper}>
              <video
                muted
                playsInline
                autoPlay={true}
                id="vid"
                loop={true}
                width="100%"
                height="100%"
                src={el.video}
              ></video>
              <p className={styles.text}>{el.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Videos;

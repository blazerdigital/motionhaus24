import React, { useRef, useState } from "react";

import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Colead.module.css";
import CopyRight from "../../CopyRight/CopyRight";

const Colead = ({ video, poster }) => {
  const [play, setPlay] = useState();

  const ref = useRef();

  return (
    <>
      <section className={styles.wrapper}>
        <div className="container">
          <div className={styles.backToHomeAndText}>
            <div>
              <p className={styles.tagline} color="#ac9555">
                Project Name
              </p>
              <h3 className={styles.title}>Life Blood #8"</h3>
            </div>
            <Link to="/">
              <p
                className={[
                  styles.tagline,
                  styles.bold,
                  styles.backtoHome,
                ].join(" ")}
              >
                Back To Home
              </p>
            </Link>
          </div>

          <div className={styles.videoContainer}>
            <video
              id="vid"
              loop={true}
              width="100%"
              height="100%"
              poster={poster}
              src={video}
              controls={play}
              ref={ref}
              onPause={() => setPlay(false)}
              onPlay={() => setPlay(true)}
            ></video>
            {!play && (
              <FaPlay
                className={styles.playIcon}
                onClick={() => {
                  ref.current.play();
                }}
              />
            )}
          </div>
          <div className={styles.textContainer}>
            <p
              className={[styles.tagline, styles.firstInfo, styles.info].join(
                " "
              )}
            >
              This is a CGI spot for AFPM. Made with Clarisse IFX, C4d and AE.
            </p>
            <p className={[styles.tagline, styles.info].join(" ")}>
              "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #1"
            </p>
          </div>
        </div>
      </section>
      <CopyRight />
    </>
  );
};

export default Colead;

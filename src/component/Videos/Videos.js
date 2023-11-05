import React from "react";

import { VideoContainer, VideoWrapper, Text } from "./Videos.styled";
import { Link } from "react-router-dom";

const Videos = ({ data }) => {
  return (
    <VideoContainer>
      {data.map((el, i) => (
        <Link to={`/${i + 1}`} key={i}>
          <VideoWrapper>
            <video
              muted
              defaultmuted
              playsinline
              autoPlay={true}
              id="vid"
              loop={true}
              width="100%"
              height="100%"
              src={el.video}
            ></video>
            <Text className="text">{el.hoverText}</Text>
          </VideoWrapper>
        </Link>
      ))}
    </VideoContainer>
  );
};

export default Videos;

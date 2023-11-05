import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, Tagline } from "../common.styled";
import {
  Wrapper,
  TextContainer,
  Title,
  VideoContainer,
  BackToHomeAndText,
} from "./SingleVideoInfo.styled";

const SingleVideoInfo = ({ data }) => {
  const [play, setPlay] = useState();
  const { id } = useParams();
  const ref = useRef();

  return (
    <Wrapper>
      <Container>
        <BackToHomeAndText>
          <div>
            <Tagline className="backtoHome" color="#ac9555">
              Project Name
            </Tagline>
            <Title>{data[id - 1].title}</Title>
          </div>
          <Link to="/">
            <Tagline className="backtoHome" color="#ac9555" bold>
              Back To Home
            </Tagline>
          </Link>
        </BackToHomeAndText>

        <VideoContainer>
          <video
            id="vid"
            loop={true}
            width="100%"
            height="100%"
            poster={data[id - 1].poster}
            src={data[id - 1].video}
            controls={play}
            ref={ref}
            onPause={() => setPlay(false)}
            onPlay={() => setPlay(true)}
          ></video>
          {!play && (
            <FaPlay
              className="playIcon"
              onClick={() => {
                ref.current.play();
              }}
            />
          )}
        </VideoContainer>
        <TextContainer>
          <Tagline lowercase>{data[id - 1].firstInfo}</Tagline>
          <Tagline className="text">{data[id - 1].secondInfo}</Tagline>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

export default SingleVideoInfo;

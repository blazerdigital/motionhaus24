import styled from "styled-components";
export const Wrapper = styled.div`
  padding-top: 60px;
  video[poster] {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const BackToHomeAndText = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 520px) {
    .backtoHome {
      font-size: 1em;
    }
  }
  @media only screen and (max-width: 520px) {
    .backtoHome {
      font-size: 1em;
    }
  }
`;
export const Title = styled.h3`
  font-family: "Adamina", serif;
  font-size: 2em;
  font-weight: 400;
  line-height: 130%;
  color: #f0ede8;
  padding-bottom: 30px;
  @media only screen and (max-width: 767px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 520px) {
    font-size: 2em;
  }
`;
export const VideoContainer = styled.div`
  position: relative;

  video {
    object-fit: cover;
  }

  .playIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    font-size: 60px;
    color: #fff;
  }
  @media only screen and (max-width: 991px) {
    .playIcon {
      font-size: 50px;
    }
  }
  @media only screen and (max-width: 767px) {
    .playIcon {
      font-size: 45px;
    }
  }
  @media only screen and (max-width: 520px) {
    .playIcon {
      font-size: 36px;
    }
  }
`;
// export const PlayContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 5px solid #000;
//   border-radius: 50%;
//   width: 80px;
//   height: 80px;

// `;
export const TextContainer = styled.div`
  padding: 60px 0;
  .text {
    padding-top: 20px;
  }
  @media only screen and (max-width: 575px) {
    br {
      display: none;
    }
  }
`;

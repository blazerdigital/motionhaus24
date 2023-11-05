import styled from "styled-components";
export const VideoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
  a {
    display: block;
  }
`;
export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 1.2em;
  color: #fff;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  @media only screen and (max-width: 767px) {
    font-size: 30px;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const VideoWrapper = styled.div`
  position: relative;

  &:hover {
    .text {
      display: block;
      animation: fadeIn 0.7s;
    }
  }
`;

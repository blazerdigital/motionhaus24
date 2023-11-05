import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 767px) {
    width: 90%;
  }
`;
export const HighlightText = styled.span`
  color: #ac9555;
`;
export const Tagline = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 24px;

  color: #b2aea8;
  color: ${({ color }) => color && color};
  font-weight: ${({ bold }) => bold && "600"};
  text-transform: ${({ lowercase }) => (lowercase ? "lowercase" : "uppercase")};
  max-width: 630px;
  @media only screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

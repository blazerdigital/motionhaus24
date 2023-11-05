import React from "react";
import SocialContainer from "../Navbar/SocialContainer/SocialContainer";
import { Container, HighlightText, Tagline } from "../common.styled";
import { Wrapper, Title, Text } from "../HeadingAndInfo/HeadingAndInfo.styled";
import { SocialWrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Collaborate</Title>
        <Text>
          Feel free to contact me for freelance projects, collaboration or just
          say hi at{" "}
          <a
            href="mailto:collaborate@motionhaus.com"
            target="_blank"
            rel="noreferrer"
          >
            <HighlightText> collaborate@motionhaus.com </HighlightText>
          </a>
          .
        </Text>
      </Wrapper>

      <SocialWrapper>
        <SocialContainer />
        <Tagline>CURRENTLY AVAILABLE FOR FREELANCE</Tagline>
      </SocialWrapper>
    </Container>
  );
};

export default Footer;

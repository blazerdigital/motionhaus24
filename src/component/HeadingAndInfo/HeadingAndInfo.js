import React from "react";
import { Container, HighlightText } from "../common.styled";
import { Title, Text, Wrapper } from "./HeadingAndInfo.styled";

const HeadingAndInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Title>HI, I'M JAROD!</Title>
        <Text>
        L.A. based <HighlightText>Filmmaker</HighlightText> for <HighlightText>Motion Graphics</HighlightText>, <HighlightText>VFX</HighlightText> and <HighlightText>Animation</HighlightText>. I work with agencies, organizations and brands. Welcome to my portfolio!
        </Text>
      </Wrapper>
    </Container>
  );
};

export default HeadingAndInfo;

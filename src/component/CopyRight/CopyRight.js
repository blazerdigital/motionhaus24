import React from "react";
import { Logo, Wrapper, Text } from "./copyright.styled";
const CopyRight = ({ logo }) => {
  return (
    <Wrapper>
      {logo && <Logo src="/images/logo.svg" alt="#" />}
      <Text>2022 MotionHaus.com All Rights Reserved</Text>
    </Wrapper>
  );
};

export default CopyRight;

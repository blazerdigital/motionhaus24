import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 900px;
  padding: 60px 0;
`;
export const Title = styled.h2`
  font-family: "Archivo Black", sans-serif;
  font-size: 1.8em;
  font-weight: 400;
  line-height: 120%;
  color: #ac9555;
  margin-bottom: 20px;
  @media only screen and (max-width: 1199px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 767px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 520px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 350px) {
    font-size: 2em;
  }
`;
export const Text = styled.p`
  font-family: "Adamina", serif;
  font-size: 1.3em;
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: 1px;
  color: #f0ede8;
  @media only screen and (max-width: 1199px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 767px) {
    font-size: 1.3em;
    br {
      display: none;
    }
  }
  @media only screen and (max-width: 520px) {
    font-size: 1.3em;
    line-height: 150%;
  }
  @media only screen and (max-width: 350px) {
    font-size: 1.3em;
  }
`;

// font-family: 'Adamina', serif;
// font-family: 'Archivo Black', sans-serif;
// font-family: 'Source Sans Pro', sans-serif;

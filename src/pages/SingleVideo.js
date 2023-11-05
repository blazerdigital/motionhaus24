import React from "react";
import SingleVideoInfo from "../component/SingleVideo/SingleVideoInfo";
import CopyRight from "../component/CopyRight/CopyRight";

const SingleVideo = ({ data }) => {
  return (
    <>
      <SingleVideoInfo data={data} />
      <CopyRight />
    </>
  );
};

export default SingleVideo;

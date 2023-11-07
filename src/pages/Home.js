import React from "react";
import HeadingAndInfo from "../component/HeadingAndInfo/HeadingAndInfo";
import Videos from "../component/AllProjects/Videos";
import Footer from "../component/Footer/Footer";
import CopyRight from "../component/CopyRight/CopyRight";

const Home = ({ data }) => {
  return (
    <>
      <HeadingAndInfo />
      <Videos data={data} />
      <Footer />
      <CopyRight logo />
    </>
  );
};

export default Home;

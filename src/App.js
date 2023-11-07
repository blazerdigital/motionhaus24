import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Lifeblood from "./component/Projects/Lifeblood/Lifeblood";
import Atlas_Gala from "./component/Projects/Atlas_Gala/Atlas_Gala";
import PlanetOZ from "./component/Projects/PlanetOZ/PlanetOZ";
import Colead from "./component/Projects/Colead/Colead";
import Massive_Theory from "./component/Projects/Massive_Theory/Massive_Theory";
import PIG_TV from "./component/Projects/PIG_TV/PIG_TV";
import TSICBD from "./component/Projects/TSICBD/TSICBD";
import Zola_Infinity from "./component/Projects/Zola_Infinity/Zola_Infinity";
import Panopticon from "./component/Projects/Panopticon/Panopticon";
import AFPM_Case_Study from "./component/Projects/AFPM_Case_Study/AFPM_Case_Study";
import Word_Of_Life from "./component/Projects/Word_Of_Life/Word_Of_Life";
import Atlas_Brand from "./component/Projects/Atlas_Brand/Atlas_Brand";
import Atlas_Trailer from "./component/Projects/Atlas_Trailer/Atlas_Trailer";

function App() {
  const data = [
    {
      poster: "/images/poster.jpg",
      video: "/videos/AFPM_Lifeblood_Thumb.mp4",
      title: "Atlas_Trailer",
    },
    {
      poster: "/images/poster.jpg",
      video: "/videos/WOW.mp4",
      title: "Word_Of_Life",
    },
    {
      poster: "/images/poster.jpg",
      video: "/videos/AtlasShrugged_Gala.mp4",
      title: "Atlas_Brand",
    },
    {
      poster: "/images/poster.jpg",
      video: "/videos/SocialVideo_CaseStudy.mp4",
      title: "AFPM_Case_Study",
    },
    {
      poster: "/images/poster.jpg",
      video: "/videos/PlanetOz.mp4",
      title: "PlanetOZ",
    },
    {
      poster: "/images/poster.jpg",
      video: "/videos/MassiveTheory_Thumb2.mp4",
      title: "Massive_Theory",
    },
    {
      poster: "/images/poster.jpg",
      video: "/videos/ColeadThumb.mp4",
      title: "Colead",
    },

    {
      poster: "/images/poster.jpg",
      video: "/videos/PigThumb_v5.mp4",
      title: "PIG_TV",
    },

    {
      poster: "/images/poster.jpg",
      video: "/videos/TSICBD_Thumb.mp4",
      title: "TSICBD",
    },
    {
      poster: "/images/poster.jpg",
      video: "/videos/Zola_Thumb.mp4",
      title: "Zola_Infinity",
    },

    {
      poster: "/images/poster.jpg",
      video: "/videos/Panopticon_Thumb.mp4",
      title: "Panopticon",
    },
  ];
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />}></Route>
        <Route
          path="/Atlas_Trailer"
          element={
            <Atlas_Trailer poster={data[8].poster} video={data[8].video} />
          }
        />
        <Route
          path="/Word_of_Life"
          element={
            <Word_Of_Life poster={data[8].poster} video={data[8].video} />
          }
        />
        <Route
          path="/Atlas_Brand"
          element={
            <Atlas_Brand poster={data[8].poster} video={data[8].video} />
          }
        />
        <Route
          path="/AFPM_Case_Study"
          element={
            <AFPM_Case_Study poster={data[8].poster} video={data[8].video} />
          }
        />
        <Route
          path="/Atlas_Gala"
          element={
            <Atlas_Gala poster={data[1].poster} video={data[1].video} />
          }
        />
        <Route
          path="/PlanetOZ"
          element={
            <PlanetOZ poster={data[2].poster} video={data[2].video} />
          }
        />
        <Route
          path="/Colead"
          element={
            <Colead poster={data[3].poster} video={data[3].video} />
          }
        />
        <Route
          path="/Massive_Theory"
          element={
            <Massive_Theory poster={data[4].poster} video={data[4].video} />
          }
        />
        <Route
          path="/PIG_TV"
          element={
            <PIG_TV poster={data[5].poster} video={data[5].video} />
          }
        />
        <Route
          path="/TSICBD"
          element={
            <TSICBD poster={data[6].poster} video={data[6].video} />
          }
        />
        <Route
          path="/Zola_Infinity"
          element={
            <Zola_Infinity poster={data[7].poster} video={data[7].video} />
          }
        />
        <Route
          path="/Panopticon" 
          element={
            <Panopticon poster={data[8].poster} video={data[8].video} />
          }
        />
      </Routes>
      
    </>
  );
}

export default App;

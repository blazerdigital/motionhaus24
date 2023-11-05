import Navbar from "./component/Navbar/Navbar";
import { Body } from "./App.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleVideo from "./pages/SingleVideo";

function App() {
  const data = [
    {
      video: "/videos/AFPM_Lifeblood_Thumb.mp4",
      poster: "/images/poster.jpg",
      title: "Life Blood #1",
      hoverText: "Lifeblood",
      firstInfo:
        "This is a CGI spot for AFPM. Made with Clarisse IFX, C4d and AE.",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #1",
    },
    {
      video: "/videos/Atlas_CG_Thumb.mp4",
      poster: "/images/poster.jpg",
      title: "Life Blood #2",
      hoverText: "Atlas Gala",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #2",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #2",
    },

    {
      video: "/videos/PlanetOz.mp4",
      poster: "/images/poster.jpg",
      title: "Life Blood #3",
      hoverText: "PlanetOz",
      firstInfo:
        "This is the title sequence made for Youtube Channel PlanetOZ in the style of UFO archival footage. This piece is made with Clarisse IFX, C4d and AE.",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #3",
    },

    {
      video: "/videos/ColeadThumb.mp4",
      poster: "/images/poster.jpg",
      title: "Life Blood #4",
      hoverText: "Colead",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #4",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #4",
    },

    {
      video: "/videos/MassiveTheory_Thumb2.mp4",
      poster: "/images/poster.jpg",
      title: "Life Blood #5",
      hoverText: "Massive Theory",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #5",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #5",
    },

    {
      video: "/videos/PigThumb_v5.mp4",
      poster: "/images/poster.jpg",
      title: "Life Blood #6",
      hoverText: "PIG TV",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #6",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #6",
    },

    {
      video: "/videos/TSICBD_Thumb.mp4",
      poster: "/images/poster.jpg",
      title: "Life Blood #7",
      hoverText: "TSICBD",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #7",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #7",
    },
    {
      video: "/videos/Zola_Thumb.mp4",
      poster: "/images/poster.jpg",
      title: "Life Blood #8",
      hoverText: "Zola Infinity",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #8",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #8",
    },

    {
      video: "/videos/Panopticon_Thumb.mp4",
      poster: "/images/poster.jpg",
      title: "Life Blood #1",
      hoverText: "Panopticon",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #9",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #9",
    },
  ];
  return (
    <Body color="#222629">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data} />}></Route>
          <Route path="/:id" element={<SingleVideo data={data} />}></Route>
        </Routes>
      </BrowserRouter>
    </Body>
  );
}

export default App;

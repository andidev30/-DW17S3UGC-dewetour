import React from "react";
import Banner from "../components/section/Baner";
import Features from "../components/section/Features";
import Tour from "../components/section/Tour";
import "./Styles.css";
import ImgLeft from "../components/img/global/left.png";
import ImgRight from "../components/img/global/right.png";

function Home() {
  return (
    <div style={{ background: "#E5E5E5", paddingBottom:"100px" }}>
    <img src={ImgLeft} className="img-left" alt="left" />
    <img src={ImgRight} className="img-right" alt="right" />
      <Banner />
      <Features />
      <br />
      <br />
      <h2 className="mt-5 text-center">Group Tour</h2>
      <Tour />
    </div>
  );
}

export default Home;

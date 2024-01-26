import React from "react";
import "../App.css";
import myImage from "../assets/myself.png";
import { DesktopIcon, FadedTriangle, CitySvg } from "../svg/Icons";

function Home() {
  return (
    <div class="container">
      <div class="item item1">
        <h1>MIGUEL FLORES</h1>
        <h2>Front End</h2>
        <h3>+ Full Stack</h3>
        {DesktopIcon()}
      </div>

      <div class="item item2">
        {FadedTriangle()}
        {CitySvg()}
        <div id="about-section">
          <img src={myImage} alt="miguel flores" />
          <h1>ABOUT MIGUEL</h1>
          <div id="about-section-paragraph">
            <p>
              I started in culinary school and worked in top restaurants,
              managing kitchens. I'm hardworking, patient, and have leadership
              skills. After years in the restaurant industry, I'm shifting gears
              to software engineering. Excited to apply my problem-solving and
              leadership abilities in this new field and eager for opportunities
              to grow and contribute.
            </p>
          </div>
        </div>
      </div>
      {/* <div class="item item3"></div> */}
    </div>
  );
}

export default Home;

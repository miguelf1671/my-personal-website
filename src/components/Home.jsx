import React from "react";
import "../App.css";

function Home() {
  const gradientColor = (
    // setting this as a global variable to use for anything you want to make gradient
    <defs>
      {/* Define a linear gradient */}
      <linearGradient id="myDesktopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#e26ee5" }} />
        <stop offset="100%" style={{ stopColor: "#7e30e1" }} />
      </linearGradient>
    </defs>
  );

  const windowSvg = (
    <svg
      fill="#000000"
      version="1.1"
      id="desktop"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.00 32.00"
      width="70vw"
      // height="auto"
      stroke="#000000"
      stroke-width="0.00032"
    >
      {gradientColor}
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill="url(#myDesktopGradient)"
          id="desktop_1_"
          d="M23,29.36H9v-0.72h6.64v-4.28H3c-1.301,0-2.36-1.059-2.36-2.36V5c0-1.301,1.059-2.36,2.36-2.36h26 c1.302,0,2.36,1.059,2.36,2.36v17c0,1.302-1.059,2.36-2.36,2.36H16.36v4.279H23V29.36z M1.36,19.36V22c0,0.904,0.736,1.64,1.64,1.64 h26c0.904,0,1.64-0.735,1.64-1.64v-2.64H1.36z M1.36,18.64h29.28V5c0-0.904-0.735-1.64-1.64-1.64H3C2.096,3.36,1.36,4.096,1.36,5 V18.64z"
        />{" "}
        <rect
          id="_Transparent_Rectangle"
          style={{ fill: "none" }}
          width="32"
          height="32"
        />{" "}
      </g>
    </svg>
  );
  return (
    <div class="background-picture">
      <div class="container">
        <div class="description">
          <div class="center-content">
            <h1>MIGUEL FLORES</h1>
            {windowSvg}
          </div>
        </div>
        <div id="projects"></div>
      </div>
    </div>
  );
}

export default Home;

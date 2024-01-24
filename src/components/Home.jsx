import React from "react";
import "../App.css";
import myImage from "../assets/myself.png";

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

  const lightBlueGradient = (
    <defs>
      {/* Define a linear gradient */}
      <linearGradient id="lightBlue" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#98e4ff" }} />
        <stop offset="100%" style={{ stopColor: "#7e30e1" }} />
      </linearGradient>
    </defs>
  );

  const fadedTriangle = (
    <svg
      class="faded-triangle"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500.04 50"
    >
      {lightBlueGradient}
      <style>{`.cls-1,.cls-2{fill:url(#lightBlue);}.cls-1{opacity:0.5;}`}</style>
      <title>faded-triangle-top</title>
      <polygon class="cls-1" points="0 0 500 0 250 50 0 0" />
      <polygon class="cls-2" points="0.04 0 500.04 0 250.04 38 0.04 0" />
    </svg>
  );

  const citySvg = (
    <svg
      class="city-svg"
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500.03 104.15"
    >
      {/* {lightBlueGradient} */}
      <style>{`.cls-1 {fill: #7e30e1;}`}</style>
      <title>city-skyline-bottom</title>

      <rect class="cls-1" x="88.19" y="72.08" width="36.08" height="32.08" />
      <rect class="cls-1" x="90.3" y="64.08" width="33.96" height="40.08" />
      <rect class="cls-1" x="91.06" y="56.53" width="33.21" height="47.62" />
      <rect class="cls-1" x="124.26" y="82.34" width="38.34" height="21.81" />
      <rect class="cls-1" x="206.83" y="49.28" width="24.3" height="54.87" />
      <rect class="cls-1" x="237.62" y="44.91" width="11.77" height="59.25" />
      <rect class="cls-1" x="265.7" y="39.47" width="17.21" height="64.68" />
      <rect class="cls-1" x="278.53" y="62.87" width="8.3" height="41.28" />
      <rect class="cls-1" y="97.43" width="500.03" height="6.72" />
      <rect class="cls-1" x="163.83" y="71.21" width="28.3" height="26.23" />
      <rect class="cls-1" x="155.91" y="55.13" width="12.68" height="42.3" />
      <rect class="cls-1" x="156.64" y="49.81" width="11.15" height="8.72" />
      <rect class="cls-1" x="157.75" y="44.6" width="9.25" height="9.25" />
      <rect class="cls-1" x="159.53" y="41.04" width="3.51" height="4.19" />
      <rect class="cls-1" x="160.04" y="40.09" width="2.21" height="1.78" />
      <rect class="cls-1" x="171.6" y="67.45" width="3.57" height="5.15" />
      <rect class="cls-1" x="168.34" y="68.47" width="19.49" height="5.19" />
      <rect class="cls-1" x="178.08" y="65.94" width="2.76" height="3.21" />
      <rect class="cls-1" x="178.25" y="65.45" width="1.92" height="1.02" />
      <rect class="cls-1" x="142.75" y="76" width="13.15" height="10.04" />
      <rect class="cls-1" x="144.83" y="74.19" width="4.5" height="5.28" />
      <rect class="cls-1" x="72.81" y="87" width="17.15" height="12" />
      <rect class="cls-1" y="95.15" width="10.94" height="4.36" />
      <rect class="cls-1" y="69.68" width="2.06" height="28.36" />
      <rect class="cls-1" y="65.94" width="1.49" height="3.74" />
      <rect class="cls-1" x="191.11" y="82.34" width="18.06" height="17.45" />
      <rect class="cls-1" x="193.6" y="76" width="15.79" height="8.32" />
      <rect class="cls-1" x="194.91" y="72.23" width="13.42" height="5.77" />
      <rect class="cls-1" x="198.81" y="69.51" width="9.85" height="4.15" />
      <rect class="cls-1" x="199.49" y="66.47" width="8.21" height="3.56" />
      <rect class="cls-1" x="291.96" y="62.87" width="17.43" height="36.38" />
      <rect class="cls-1" x="306.91" y="73.13" width="21.06" height="28.3" />
      <rect class="cls-1" x="321.85" y="70.34" width="12.6" height="28.38" />
      <rect class="cls-1" x="322.91" y="66.47" width="11.55" height="17.85" />
      <rect class="cls-1" x="423.51" y="69.74" width="5.96" height="28.98" />
      <rect class="cls-1" x="429.92" y="69.74" width="11.17" height="29.51" />
      <rect class="cls-1" x="432.11" y="67.77" width="6.64" height="4.23" />
      <rect class="cls-1" x="464.04" y="32.53" width="18.42" height="65.28" />
      <rect class="cls-1" x="478.3" y="81.81" width="6.42" height="17.43" />
      <rect class="cls-1" x="480.42" y="67.77" width="3.62" height="15.7" />
      <rect class="cls-1" x="484.34" y="96.11" width="6.91" height="3.55" />
      <rect class="cls-1" x="486.08" y="95.36" width="1.09" height="1.43" />
      <rect class="cls-1" x="498.05" y="96.79" width="1.95" height="1.64" />
      <rect class="cls-1" x="499.38" y="95.8" width="0.62" height="0.91" />
      <rect class="cls-1" x="493.69" y="96.71" width="2.6" height="1.44" />
      <polyline
        class="cls-1"
        points="10.15 83.6 4.77 86.04 4.77 96.62 10.15 96.62 10.15 83.6"
      />
      <polyline
        class="cls-1"
        points="34.4 36.45 66.17 44.38 66.17 82.92 66.17 98.04 34.4 98.04 34.4 36.45"
      />
      <polygon
        class="cls-1"
        points="84.64 85.36 84.64 101.04 65.17 101.04 65.17 83.32 84.64 85.36"
      />
      <polygon
        class="cls-1"
        points="81.13 83.41 81.13 85.44 66.44 83.75 66.44 81.77 78.61 81.77 78.61 83.24 81.13 83.41"
      />
      <polygon
        class="cls-1"
        points="125.25 73.13 125.25 82.34 124.26 82.34 124.26 73 125.25 73.13"
      />
      <polygon
        class="cls-1"
        points="135.34 82.34 135.34 79.47 137.66 79.47 137.66 78.36 136.06 78.36 136.06 77.25 139.47 77.25 139.47 76.47 142.07 76.47 142.07 74.62 145 74.62 145 82.34 135.34 82.34"
      />
      <polygon
        class="cls-1"
        points="151.94 74.98 150.57 76 153.25 76 151.94 74.98"
      />
      <polygon
        class="cls-1"
        points="169.89 68.47 170.13 66.26 174.04 57 174.57 57.23 170.74 66.25 170.38 68.47 169.89 68.47"
      />
      <polygon
        class="cls-1"
        points="187.83 70.03 192.13 71.21 187.83 71.21 187.83 70.03"
      />
      <polygon
        class="cls-1"
        points="207.7 49.23 214.59 42.53 214.59 41.87 214.09 41.87 214.09 41.36 216.15 41.36 216.15 40.64 224.76 40.64 224.76 38.3 225.26 38.3 225.95 30.53 226.14 38.38 226.72 38.38 226.72 43.51 230.24 47.09 236.09 45.59 236.09 39.28 239.3 38.41 239.3 37.77 242.48 37.77 242.48 35.09 244.24 35.09 244.24 31.17 244.78 31.17 244.78 29.06 245.62 29.06 246.76 25.89 246.76 22.94 247.15 22.94 247.15 12.87 247.53 22.79 247.99 22.79 247.99 26.04 249.06 28.94 249.67 28.94 249.67 31.05 250.32 31.05 250.32 35.43 251.01 35.43 251.01 34.64 251.63 34.64 251.63 35.24 251.63 36.6 252.81 36.6 252.81 38.08 253.38 39.24 255.18 39.09 255.18 38.11 258.78 38.11 258.78 40.09 260.81 41.87 260.81 46 263.95 46.19 265.48 47.7 265.48 67.45 266.51 67.45 266.36 97.43 266.36 101.96 209.42 101.96 207.7 49.23"
      />
      <rect class="cls-1" x="10.15" y="36.45" width="24.6" height="67.7" />
      <rect class="cls-1" x="86.53" y="80.38" width="30.64" height="23.77" />
      <polyline
        class="cls-1"
        points="291.96 62.87 286.83 67.77 286.83 97.43 291.96 97.43 291.96 62.87"
      />
      <polyline
        class="cls-1"
        points="333.62 66.47 333.62 32.53 336.79 31.93 335.81 29.51 341.4 28.23 341.85 0 342.83 27.7 348.26 29.13 348.26 31.25 351.36 32.53 351.36 68.6 353.32 68.6 353.32 66.47 358.07 66.47 360.42 65.17 373.93 65.17 376.79 65.66 380.49 65.66 380.49 67.77 389.55 67.77 389.55 77.74 399.36 77.06 401.25 78.42 401.25 81.58 402 81.58 402 76.08 403.66 76.08 403.13 73.66 407.89 72.53 410.07 72.68 410.07 75.4 411.81 76 411.81 83.51 414.91 82.19 414.91 67.77 414.91 59.92 416.42 59.92 416.42 57.41 416.42 52.08 419.13 51.32 417.09 50.94 418.15 49.66 419.66 50.26 428.87 41.76 420.94 49.81 420.94 51.32 426.98 51.32 426.98 55.55 427.96 55.92 427.96 59.62 428.87 59.62 428.87 65.17 429.93 65.17 429.93 69.74 429.93 100.15 333.62 100.15 333.62 66.47"
      />
      <polyline
        class="cls-1"
        points="451.32 97.43 451.32 93.96 449.28 93.96 449.28 93.28 447.87 93.28 447.87 94.19 446.4 94.19 446.4 91.25 444.3 91.25 444.3 89.89 442.32 89.89 442.32 79.47 441.09 79.47 441.09 97.43 451.32 97.43"
      />
    </svg>
  );

  const windowSvg = (
    <svg
      fill="#000000"
      version="1.1"
      id="desktop"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.00 32.00"
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
    <div class="container">
      <div class="item item1">
        <h1>MIGUEL FLORES</h1>
        <h2>Front End</h2>
        <h3>+ Full Stack</h3>
        {windowSvg}
      </div>

      <div class="item item2">
        {fadedTriangle}
        {citySvg}
        <img src={myImage} alt="miguel flores" />
      </div>
      <div class="item item3"></div>
    </div>
  );
}

export default Home;

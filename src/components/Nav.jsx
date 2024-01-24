import React, { useState } from "react";
import "../App.css";

const gradientColor = (
  // setting this as a global variable to use for anything you want to make gradient
  <defs>
    {/* Define a linear gradient */}
    <linearGradient id="mySvgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: "#e26ee5" }} />
      <stop offset="100%" style={{ stopColor: "#7e30e1" }} />
    </linearGradient>
  </defs>
);

const burgerSvg = (
  <svg
    width="2rem"
    height="2rem"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {gradientColor}

    <path
      fill="url(#mySvgGradient)"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.5 8.25H4.5V6.75H19.5V8.25Z"
    />
    <path
      fill="url(#mySvgGradient)"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.5 12.75H4.5V11.25H19.5V12.75Z"
    />
    <path
      fill="url(#mySvgGradient)"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.5 17.25H4.5V15.75H19.5V17.25Z"
    />
  </svg>
);

const closeMenuIcon = (
  <svg
    width="2rem"
    height="2rem"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {gradientColor}

    <g fill="url(#mySvgGradient)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
      />
    </g>
  </svg>
);

const linkedInIcon = (
  <svg
    width="2rem"
    height="2rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-143 145 512 512"
  >
    {gradientColor}
    <g fill="url(#mySvgGradient)">
      <path d="M-143,145v512h512V145H-143z M339,627h-452V175h452V627z" />
      <rect x="-8.5" y="348.4" width="49.9" height="159.7" />
      <path
        d="M127.9,508.1v-86.3c0-4.9-0.2-9.7,1.2-13.1c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8
      c0-49.4-27.8-72.4-63.3-72.4c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7H127.9z"
      />
      <path d="M14.7,328.4h0.4c18.8,0,30.5-12.3,30.4-27.7C45.1,284.9,33.8,273,15.4,273c-18.4,0-30.5,11.9-30.5,27.7 C-15.1,316.2-3.4,328.4,14.7,328.4z" />
    </g>
  </svg>
);

const githubIcon = (
  <svg
    width="2rem"
    height="2rem"
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
  >
    {gradientColor}
    <g fill="url(#mySvgGradient)">
      <path
        stroke-width="12"
        d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
      />
    </g>
  </svg>
);

function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header class="primary-header flex">
      <div>
        <h1 class="logo">MF</h1>
      </div>

      <button
        class="menu-button"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={handleToggle}
      >
        {isVisible ? closeMenuIcon : burgerSvg}

        <span class="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          data-visible={isVisible.toString()}
          class={`primary-navigation flex ${isVisible ? "visible" : "hidden"}`}
        >
          {/* <li>
            <a href="https://www.google.com/">
              <span aria-hidden="true">00</span>About
            </a>
          </li> */}
          <li>
            <a href="https://www.google.com/">
              <span aria-hidden="true">01</span>Resume
            </a>
          </li>
          <li>
            <a class="icons" href="">
              <span aria-hidden="true"></span>
              {linkedInIcon}
            </a>
          </li>
          <li>
            <a class="icons" href="">
              <span aria-hidden="true"></span>
              {githubIcon}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

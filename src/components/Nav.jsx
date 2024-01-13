import React, { useState } from "react";
import "../App.css";

const burgerSvg = (
  <svg
    width="2rem"
    height="2rem"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Define a linear gradient */}
      <linearGradient id="mySvgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#e26ee5" }} />
        <stop offset="100%" style={{ stopColor: "#7e30e1" }} />
      </linearGradient>
    </defs>

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
    <defs>
      {/* Define a linear gradient */}
      <linearGradient id="closeMenuGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#e26ee5" }} />
        <stop offset="100%" style={{ stopColor: "#7e30e1" }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#closeMenuGradient"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
    />
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
        <h1 class="logo">MIGUEL FLORES</h1>
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
          <li class="active">
            <a href="https://www.google.com/">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li>
            <a href="https://www.google.com/">
              <span aria-hidden="true">01</span>About
            </a>
          </li>
          <li>
            <a href="https://www.google.com/">
              <span aria-hidden="true">02</span>Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

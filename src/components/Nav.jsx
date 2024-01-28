import React, { useState } from "react";
import { LinkedinIcon, GithubIcon } from "../svg/Icons";
import { BurgerSvg, CloseMenuIcon } from "../svg/NavIcons";

import "../App.css";

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
      <div class="menu-1">
        <button
          class="menu-button"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={handleToggle}
        >
          {isVisible ? CloseMenuIcon() : BurgerSvg()}

          <span class="sr-only">Menu</span>
        </button>
      </div>

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
          <li class="icons">
            <a class="nav-icon" href="">
              <span aria-hidden="true"></span>
              {LinkedinIcon()}
            </a>
          </li>
          <li class="icons">
            <a class="nav-icon" href="">
              <span aria-hidden="true"></span>
              {GithubIcon()}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

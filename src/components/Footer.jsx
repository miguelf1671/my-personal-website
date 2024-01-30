import React from "react";
import "../App.css";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "../svg/Icons";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-nav">
          <h2>Follow Here</h2>
        </div>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/miguel-flores-ramirez-4405892a1">
            {LinkedinIcon()}
          </a>
          <a href="https://github.com/miguelf1671">{GithubIcon()}</a>
          <a href="https://www.instagram.com/mignuggets1671/">
            {InstagramIcon()}
          </a>
        </div>
        <div class="footer-bottom">
          <p>
            Copyright &copy; 2024; Designed by
            <span class="designer"> Miguel Flores</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

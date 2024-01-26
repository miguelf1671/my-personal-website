import React from "react";
import "../App.css";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "../svg/Icons";

function Footer() {
  return (
    <footer id="main-footer">
      <div id="footer">
        <div id="row">
          <div id="footer-col">
            <h4>h4 tag</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">about us 2</a>
              </li>
            </ul>
          </div>
          <div id="footer-col">
            <h4>Follow Me</h4>
            <div class="social-links">
              <a href="#">
                <li id="linkedin">{LinkedinIcon()}</li>
              </a>
              <a href="#">
                <li id="github">{GithubIcon()}</li>
              </a>
              <a href="#">
                <li id="instagram">{InstagramIcon()}</li>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

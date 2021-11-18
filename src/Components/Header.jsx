import React from "react";
import "../styles/header.css";
import Button from "./Button";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <a href="#projects" className="hover-animation">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover-animation">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-content">
          <div className="name">
            <h1>Mandeep Debnath</h1>
            <div className="social-icons">
              <a
                href="https://twitter.com/mannndeee"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/in/mandeepdebnath/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://github.com/mandeepdebnath"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
          <div className="info">
            <p className="role">Frontend developer</p>
            <div className="content-body">
              <p>
                I'm an undergrad and a frontend developer and I love building
                static as well as dynamic mobile-responsive websites using HTML,
                CSS, and Javascript.
              </p>
              <p>
                I make web apps using React JS and various CSS frameworks like
                TailwindCSS and Material UI.
              </p>
            </div>
            <div className="buttons">
              <Button
                bg="#1f1f1f"
                borderColor="#F26C4F"
                shadowColor="#F26C4F"
                textColor="#F1F7EE"
                href="#projects"
              >
                View Projects
              </Button>
              <Button
                bg="#1f1f1f"
                borderColor="#c2c2c2"
                shadowColor="#c2c2c2"
                textColor="#c2c2c2"
                href="https://github.com/mandeepdebnath/portfolio/blob/main/src/Resume/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

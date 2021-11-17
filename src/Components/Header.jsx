import React from "react";
import "../styles/header.css";
import Button from "./Button";
// import LightButton from "./LightButton";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <h1>MD</h1>
          <ul>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="header-content">
          <h1>Mandeep Debnath</h1>
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
              >
                View Projects
              </Button>
              <Button
                bg="#1f1f1f"
                borderColor="#c2c2c2"
                shadowColor="#c2c2c2"
                textColor="#c2c2c2"
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

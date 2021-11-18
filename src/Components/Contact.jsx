import "../styles/contact.css";
import React from "react";
import contact from "../assets/contact.svg";
import Button from "../Components/Button";

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="wrapper">
          <img src={contact} alt="" />
          <div className="contact-info">
            <h1>Let's talk?</h1>
            <p className="contact-body">
              I'm open to working on projects or collaborating with people, I'd
              love to hear your ideas and work with you.
            </p>
            <div className="social">
              <a href="#" className="hover-animation">
                Email: mandeepdebnath@gmail.com
              </a>{" "}
              <br />
              <a href="#" className="hover-animation">
                Connect on Twitter
              </a>{" "}
              <br />
              <a href="#" className="hover-animation">
                Connect on Linkedin
              </a>
            </div>
            <div className="buttons">
              <Button
                bg="#1f1f1f"
                borderColor="#F26C4F"
                shadowColor="#F26C4F"
                textColor="#F1F7EE"
              >
                View Resume
              </Button>
              <Button
                bg="#1f1f1f"
                borderColor="#c2c2c2"
                shadowColor="#c2c2c2"
                textColor="#c2c2c2"
              >
                View Github Profile
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

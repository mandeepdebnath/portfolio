import "../styles/contact.css";
import React from "react";
import Button from "../Components/Button";

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <h1>Contact me</h1>
        <div className="wrapper">
          <form name="contact form" method="POST" data-netlify="true">
            <div class="details">
              <input type="hidden" name="form-name" value="contact-form" />
              <input type="text" name="name" placeholder="Full name" required />
              <input type="text" name="email" placeholder="Email" required />
              <input
                type="text"
                name="number"
                placeholder="Phone number"
                required
              />
            </div>
            <div className="message">
              <p>Message</p>
              <textarea rows="4" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>

          <div className="contact-info">
            <h2>Let's talk?</h2>
            <p className="contact-body">
              I'm open to working on projects or collaborating with people, I'd
              love to hear your ideas and work with you.
            </p>
            <div className="social">
              <a
                href="mailto:mandeepdebnath@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover-animation"
              >
                Email: mandeepdebnath@gmail.com
              </a>{" "}
              <br />
              <a
                href="https://twitter.com/MandeepDebnath"
                target="_blank"
                rel="noreferrer"
                className="hover-animation"
              >
                Connect on Twitter
              </a>{" "}
              <br />
              <a
                href="https://www.linkedin.com/in/mandeepdebnath/"
                target="_blank"
                rel="noreferrer"
                className="hover-animation"
              >
                Connect on Linkedin
              </a>
            </div>
            <div className="buttons">
              <Button
                bg="#1f1f1f"
                borderColor="#F26C4F"
                shadowColor="#F26C4F"
                textColor="#F1F7EE"
                href="https://github.com/mandeepdebnath/portfolio/blob/main/src/Resume/resume.pdf"
                target="_blank"
              >
                View Resume
              </Button>
              <Button
                bg="#1f1f1f"
                borderColor="#c2c2c2"
                shadowColor="#c2c2c2"
                textColor="#c2c2c2"
                href="https://github.com/mandeepdebnath"
                target="_blank"
              >
                View Github
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">SRI AOPO CHANDRA DAS </span>
            from <span className="purple"> Dhaka, Bangladesh</span>
            <br /> I am a first year student pursuing Bachelor of Science
            in Computer Science Engineering.
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {/* "Strive to build things that make a difference!"{" "} */}
            "while(noSuccess) ? Try Again : Try New"
          </p>
          <footer className="blockquote-footer">Aopo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

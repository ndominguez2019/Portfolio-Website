import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nicolas Dominguez </span>
            from <span className="purple"> Tampa, Florida. </span>
            <br />
            I am currently employed as an Automation Controls Engineer.
            <br />
            I have completed my Bachelor's in Science in Chemical Engineering and I'm currently 
            studying for the CFA level 2 exam.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Trading Stocks
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dominguez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

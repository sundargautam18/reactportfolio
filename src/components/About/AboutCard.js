import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sundar Gautam </span>
            from <span className="purple"> Jhapa,Nepal.</span>
            <br />I previously worked as MERN Stack Developer at Swivt Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Book Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
         
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any one can code"{" "}
          </p>
          <footer className="blockquote-footer">Unknown</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

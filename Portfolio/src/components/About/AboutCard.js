import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { GiRopeway } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { TbBook2 } from "react-icons/tb";
import { MdOutlineBakeryDining } from "react-icons/md";



function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chedva Josefsberg </span>
            from <span className="purple"> Center District, Israel.</span>
            <br />
            I am currently in intership as a software developer at Chip.
            <br />
            I graduated from Full Stack this year with a high average.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MdOutlineBakeryDining /> Baking
            </li>
            <li className="about-activity">
              <TbBook2 /> Reading books
            </li>
            <li className="about-activity">
              <GiRopeway /> Trips
            </li>
          </ul>

          <p style={{ color: "#ff5cd1" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

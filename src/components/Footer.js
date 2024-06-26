import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
    <Row>
  <Col md="4" className="footer-copywright">
    <h3>Designed and Developed by Dipesh Gehlot</h3>
  </Col>
  <Col md="4" className="footer-copywright">
    <h3>Copyright © {year} D</h3>
  </Col>
  <Col md="4" className="footer-body">
    <ul className="footer-icons">
      <li className="social-icons">
        <a
          href="https://github.com/Dipeshgehlot69"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="github-icon"
        >
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://github.com/Dipeshgehlot69"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="twitter-icon"
        >
          <AiOutlineTwitter />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/dipesh-gehlot-231069268/"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="linkedin-icon"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.instagram.com/dipesh324/"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="instagram-icon"
        >
          <AiFillInstagram />
        </a>
      </li>
    </ul>
  </Col>
</Row>

    </Container>
  );
}

export default Footer;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons" data-testid="cplusplus-icon">
    <CgCPlusPlus />
  </Col>
  <Col xs={4} md={2} className="tech-icons" data-testid="javascript-icon">
    <DiJavascript1 />
  </Col>
  <Col xs={4} md={2} className="tech-icons" data-testid="nodejs-icon">
    <DiNodejs />
  </Col>
  <Col xs={4} md={2} className="tech-icons" data-testid="react-icon">
    <DiReact />
  </Col>
  <Col xs={4} md={2} className="tech-icons" data-testid="mongodb-icon">
    <DiMongodb />
  </Col>
  <Col xs={4} md={2} className="tech-icons" data-testid="nextjs-icon">
    <SiNextdotjs />
  </Col>
  <Col xs={4} md={2} className="tech-icons" data-testid="git-icon">
    <DiGit />
  </Col>
  <Col xs={4} md={2} className="tech-icons" data-testid="postgresql-icon">
    <SiPostgresql />
  </Col>
  <Col xs={4} md={2} className="tech-icons" data-testid="python-icon">
    <DiPython />
  </Col>
  <Col xs={4} md={2} className="tech-icons" data-testid="figma-icon">
    <FaFigma />
  </Col>
</Row>
  );
}

export default Techstack;

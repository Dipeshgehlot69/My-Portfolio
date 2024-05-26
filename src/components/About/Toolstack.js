import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiTailwindcss,
  SiBootstrap ,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons" data-testid="macos-icon">
      <SiMacos />
    </Col>
    <Col xs={4} md={2} className="tech-icons" data-testid="vscode-icon">
      <SiVisualstudiocode />
    </Col>
    <Col xs={4} md={2} className="tech-icons" data-testid="postman-icon">
      <SiPostman />
    </Col>
    <Col xs={4} md={2} className="tech-icons" data-testid="tailwindcss-icon">
      <SiTailwindcss />
    </Col>
    <Col xs={4} md={2} className="tech-icons" data-testid="bootstrap-icon">
      <SiBootstrap />
    </Col>
  </Row>
  
  );
}

export default Toolstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import squaresole from "../../Assets/Projects/squaresole.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I am currently working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={squaresole}
              isBlog={false}
              title="Squaresole"
              description="E-commerce site selling t-shirts. Built using Wordpress, CSS and HTML. Currently working on a GCP migration of servers"
              ghLink="https://github.com/ndominguez2019"
              demoLink="https://squaresole.com"
            />

          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

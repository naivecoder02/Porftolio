import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import Task from "../../Assets/Projects/Task-Manager.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import TMS from "../../Assets/Projects/TMS.jpg";
import Trend from "../../Assets/Projects/trend2.jpeg";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={TMS}
              title="Ticket Management System"
              description="This is a fully functional complaint management and resolving website that uses EJS in the front end and NodeJs and express js in backend and MongoDb as Database."
              ghLink="https://github.com/naivecoder02/TMS"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/rahuljha4171/Portfolio-Website"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Task}
              title="Task Manager"
              description="The Task Manager application is a comprehensive web-based solution developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It is designed to provide users with a robust platform for managing their tasks efficiently, incorporating essential features such as authentication, authorization, and CRUD operations."
              ghLink="https://github.com/naivecoder02/taskmanager"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Trend}
              title="Trend Recommendation System"
              description="A fashion recommendation system developed using DeepLearning, Python and it's Libraries. It recommends the items respective to the item searched. "
              ghLink="https://github.com/naivecoder02/Trend-Recommender-System"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;

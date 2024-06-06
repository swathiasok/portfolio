import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Project.css';

function Projects() {
  const projectsData = {
    dlAndCv: [
      {
        title: "Partial Face Recognition",
        description: "Python, Keras, Tensorflow",
        imageUrl: "images/face_recog.webp"
      },
      {
        title: "Object Detection",
        description: "Python, Keras, Tensorflow",
        imageUrl: "images/object_detect.webp"
      },
      {
        title: "Mask DetectionV",
        description: "Python, Keras, Tensorflow",
        imageUrl: "images/mask_recog.jpg"
      },
      {
        title: "CV-based Smart Selfie",
        description: "Python, OpenCV",
        imageUrl: "images/face_detect.webp"
      },
    ],
    webDevelopment: [
      {
        title: "Blogging Site",
        description: "EJS, NodeJS, Express, MongoDB",
        imageUrl: "images/blog_site.gif"
      },
      {
        title: "Stocks App",
        description: "AngularJS, NodeJS, Express, MongoDB",
        imageUrl: "images/stocks_app.avif"
      },
    ],
    iot: [
      {
        title: "Automatic Traffic Control System",
        description: "Arduino",
        imageUrl: "images/traffic.jpeg"
      },
    ]
  };

  return (
    <Container className="projects">
      <Row className="section">
        <Col xs={12} md={2}>
          <h2 className="section-title">DL and CV</h2>
        </Col>
        <Col xs={12} md={10}>
          <Row xs={1} md={2} lg={4} className="g-4">
            {projectsData.dlAndCv.map((project, index) => (
              <Col key={index}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="section">
        <Col xs={12} md={2}>
          <h2 className="section-title">Web Development</h2>
        </Col>
        <Col xs={12} md={10}>
          <Row xs={1} md={2} lg={4} className="g-4">
            {projectsData.webDevelopment.map((project, index) => (
              <Col key={index}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="section">
        <Col xs={12} md={2}>
          <h2 className="section-title">IoT</h2>
        </Col>
        <Col xs={12} md={10}>
          <Row xs={1} md={2} lg={4} className="g-4">
            {projectsData.iot.map((project, index) => (
              <Col key={index}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text ><i>{project.description}</i></Card.Text>
        <Card.Link href={project.link}>
          <FontAwesomeIcon icon={faGithub} />
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Projects;

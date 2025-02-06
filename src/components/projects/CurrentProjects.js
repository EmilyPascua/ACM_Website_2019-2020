import React from "react";
import { useState } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Collapse,
  Container,
  Carousel,
  Image,
  Modal,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.css";
import "./currentprojects.css";

const CurrentProjects = (props) => {
  const [begInfoButton, setBegInfo] = useState("More");
  const [advInfoButton, setAdvInfo] = useState("More");
  const [begOpen, setBegOpen] = useState(false);
  const [advOpen, setAdvOpen] = useState(false);

  const [isBegModalOpen, setBegModalOpen] = useState(false);
  const [isAdvModalOpen, setAdvModalOpen] = useState(false);
  const openBegModal = () => setBegModalOpen(true);
  const closeBegModal = () => setBegModalOpen(false);

  const openAdvModal = () => setAdvModalOpen(true);
  const closeAdvModal = () => setAdvModalOpen(false);

  const infoButtonHandler = (projType) => {
    if (projType === "beg") {
      setBegOpen(!begOpen);
      if (begOpen) {
        setBegInfo("More");
      } else {
        setBegInfo("Less");
      }
    } else {
      setAdvOpen(!advOpen);
      if (advOpen) {
        setAdvInfo("More");
      } else {
        setAdvInfo("Less");
      }
    }
  };

  const hasBeginners = props.current?.level?.beginners;
  const hasAdvanced = props.current?.level?.advanced;

  return (
    <Container>
      {/* modal for beginners project */}
      {hasBeginners && (
        <Modal show={isBegModalOpen} onHide={closeBegModal} size="lg">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="d-flex justifiy-content-center">
            <Image 
              src={props.current.level.beginners.flyer} 
              style={{objectFit: "contain", overflow: "hidden"}} 
            />
          </Modal.Body>
        </Modal>
      )}

      {/* modal for advanced project */}
      {hasAdvanced && (
        <Modal show={isAdvModalOpen} onHide={closeAdvModal} size="lg">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="d-flex justifiy-content-center">
            <Image 
              src={props.current.level.advanced.flyer} 
              style={{objectFit: "contain", overflow: "hidden"}} 
            />
          </Modal.Body>
        </Modal>
      )}

      <Row>
        <div
          id="current-header"
          className="projectheader container-fluid text-center py-4"
        >
          <h1>{props.current.semester}</h1>
        </div>

        {/* Beginners Card */}
        {hasBeginners && (
          <Col md={hasAdvanced ? 6 : 12}>
            <Card border="secondary" className="current-card text-center">
              <div onClick={openBegModal}>
                <Card.Img
                  style={{cursor: "pointer"}}
                  variant="top"
                  src={props.current.level.beginners.flyer}
                  className="current-flyer img-thumbnail shadow-lg mb-5 bg-white rounded"
                />
              </div>
              <Card.Body>
                <Card.Title className="titlecard shadow mb-3">
                  Beginners Workshop
                </Card.Title>
                <Card.Text className="currentDesc p-2">
                  Learn the fundamentals of programming, and develop your first
                  project using the VSCode editor here in our beginner's project
                  workshop
                  <Collapse in={begOpen}>
                    <div>
                      <div className="skills-section my-4">
                        <h4 className="skill-header">You will learn:</h4>
                        {props.current.level.beginners.skills.map((skill, index) => (
                          <div key={index}>
                            <Icon.CaretRightFill className="d-inline" />
                            <span>{skill}</span>
                            <Icon.CaretLeftFill className="d-inline" />
                          </div>
                        ))}
                      </div>
                      <div className="leaders-section">
                        <h4 className="leaders-header">Leaders:</h4>
                        <Carousel className="leadercarousel">
                          {props.current.level.beginners.leaders.map(
                            ({ img, name }, index) => (
                              <Carousel.Item key={index}>
                                <img src={img} alt={name} />
                                <Carousel.Caption>
                                  <h4 className="leadername">{name}</h4>
                                </Carousel.Caption>
                              </Carousel.Item>
                            )
                          )}
                        </Carousel>
                      </div>
                    </div>
                  </Collapse>
                </Card.Text>
                <Button
                  onClick={(e) => infoButtonHandler(e.target.value)}
                  aria-expanded={begOpen}
                  variant="warning"
                  size="sm"
                  value="beg"
                >
                  {begInfoButton}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )}

        {/* Advanced Card */}
        {hasAdvanced && (
          <Col md={hasBeginners ? 6 : 12}>
            <Card border="secondary" className="current-card text-center">
              <div onClick={openAdvModal}>
                <Card.Img
                  style={{cursor: "pointer"}}
                  variant="top"
                  src={props.current.level.advanced.flyer}
                  className="current-flyer img-thumbnail shadow-lg mb-5 bg-white rounded"
                />
              </div>
              <Card.Body>
                <Card.Title className="titlecard shadow mb-3">
                  Advanced Workshop
                </Card.Title>
                <Card.Text className="currentDesc p-2">
                  Interested in react native? In this advanced workshop
                  series, we will be using Javascript to create and
                  implement a task application!
                  <Collapse in={advOpen}>
                    <div>
                      <div className="skills-section my-4">
                        <h4 className="skill-header">You will learn:</h4>
                        {props.current.level.advanced.skills.map((skill, index) => (
                          <div key={index}>
                            <Icon.CaretRightFill className="d-inline" />
                            <span>{skill}</span>
                            <Icon.CaretLeftFill className="d-inline" />
                          </div>
                        ))}
                      </div>
                      <div className="leaders-section">
                        <h4 className="leaders-header">Leaders:</h4>
                        <Carousel className="leadercarousel">
                          {props.current.level.advanced.leaders.map(
                            ({ img, name }, index) => (
                              <Carousel.Item key={index}>
                                <img src={img} alt={name} />
                                <Carousel.Caption>
                                  <h4 className="leadername">{name}</h4>
                                </Carousel.Caption>
                              </Carousel.Item>
                            )
                          )}
                        </Carousel>
                      </div>
                    </div>
                  </Collapse>
                </Card.Text>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={(e) => infoButtonHandler(e.target.value)}
                  aria-expanded={advOpen}
                  value="adv"
                  className="shadow"
                >
                  {advInfoButton}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CurrentProjects;
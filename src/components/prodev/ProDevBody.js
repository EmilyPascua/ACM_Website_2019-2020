import React from "react";
import { useState } from "react";
import { Button, Image, Modal} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./Prodev.css";


const ProDevBody = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  const openModel = () => setIsOpen(true)
  const closeModel = () => setIsOpen(false)

  let isVideo = false;
  if (props.mentorship.videoLink != "") {
    isVideo = true;
  }
  return (
    <div>
      {/* Video Link stored in firestore */}
      {/*Only render if video link exists*/}
      {/* {isVideo && (
        <div className="videoWrapper">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="560"
              height="315"
              src={props.mentorship.videoLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )} */}
      <p>
        <h2>
          <span className="highlight-text">
            <b>About this program:</b>
          </span>
        </h2>
        <p className="aboutprogram">
          If you feel that you are lacking professional skills, or you seek more
          involvement in the tech industry, then this program is perfect for
          you! The prodev program will teach valuable skills and provide
          resources that are crucial for a professional. Additionally, the
          program helps increase your opportunity in landing jobs and improves
          your financial status. By applying, you will have the opportunity to
          learn important life lessons from your mentors that are not taught in
          the typical classroom environment. Overall, this program will benefit
          you professionally and academically by the time you graduate.
          <br />
          Prodev sessions are open for sign up to{" "}
          <b>
            <u>all ACM members</u>
          </b>{" "}
          in all different levels (Freshmen, Sophomores, Juniors and Seniors)
        </p>

        {/* LIST OF WORKSHOPS/EVENTS/TOPICS  */}
        <div className="row workshop-container">
          <h1 className="program-description col-12">
            Covered topics from the prodev program:
          </h1>

          <div className="skill-item col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.FileEarmarkTextFill className="icon" />
              <b>Building your Resume/LinkedIn</b>
            </div>
          </div>
          <div className="skill-item col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.Search className="icon" />
              <b>Internship/Job Hunting</b>
            </div>
          </div>
          <div className="skill-item col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.PeopleFill className="icon" />
              <b>Interviews</b>
            </div>
          </div>
          <div className="skill-item2 col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.Mortarboard className="icon" />
              <b>Succeeding as an Undergrad</b>
            </div>
          </div>
          <div className="skill-item2 col-lg-4 col-md-6 col-12">
            <div className="icon-box">
              <Icon.CashCoin className="icon" />
              <b>Financial Management</b>
            </div>
          </div>
        </div>
        {/*end of skills list*/}
      </p>

      <div className="signup-section">
        <p className="program-description">Sign-up now!</p>

        {/*Stored in firestore*/}
        <Modal show={isOpen} onHide={closeModel} size="lg">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="d-flex justify-content-center" >
            <Image src={props.mentorship.flyer} style={{objectFit: "contain", overflow: "hidden"}} />
          </Modal.Body>
        </Modal>
        
          <Image onClick={openModel} style={{cursor: "pointer"}}

            src={props.mentorship.flyer}
            className="current-poster rounded m-auto d-block"
            alt="mentorship flyer"
          ></Image>


        

        {/*Only update here if signup link is live*/}
        <Button
          variant="success"
          className="join-button mx-auto"
          size="lg"
          href="https://docs.google.com/forms/d/e/1FAIpQLSewB2UxdKUC2N67fitAlOVFw5Fq90ct-oGmY-dHR9nGyZ6DAA/viewform"
          disabled
        >
          Sign up here!
        </Button>
      </div>
    </div>
  );
};

export default ProDevBody;


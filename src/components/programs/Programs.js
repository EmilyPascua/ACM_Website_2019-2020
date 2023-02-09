import React from "react";
import { useState } from "react";
import firebase from "../professional-events/firebaseConfig.js";
import { Col, Tab, Dropdown, DropdownButton, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Programs.css";
import Mentorship from "./Mentorship.js";
import ArchiveProgram from "./ArchivePrograms.js";

/* Updating the Mentorship page:
  - Update schoolYears array
  - Add new mentorship section
  - update the flyer image
*/

//These are list of semesters that has mentorship programs
/*Step 1: If there's a new program, insert the new semester year
  as the first element with this format -> ["first", *Season* *Year*]
  Step 2: Update the following ordinals of older semesters
*/

class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMentorship1: false,
      showMentorship2: false,
      showTutoring: false,
      currentSem: "Season Year",
      currentProgram: null,
      prevMentorship: null,
    };
  }

  /*This function updates the text of the dropdown button*/
  changeYear = (sem) => {
    this.setState({ currentSem: sem });
  };

  componentDidMount() {
    firebase
      .firestore()
      .collection("mentorship")
      .get()
      .then((snapshot) => {
        const events = [];
        const seasons = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          events.push(data);
          seasons.push(data.season);
        });
        this.setState({ prevMentorship: events.reverse() });
        this.setState({ currentSem: this.state.prevMentorship[0].season });
        this.setState({ currentProgram: this.state.prevMentorship[0] });
        this.state.prevMentorship.splice(0, 1);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="programs-body">
        <div className="mentor-title-text">
          <p>Interested in improving?</p>
          <p>Participate in our PRO-DEV Workshops for Spring 2023!</p>
        </div>
        <div className="mentorship-title-card"></div>

        {/* 
                Remember to update dates in the disclaimer: 
                1. Mentorship program signups open
                2. Signup deadline 
                */}

        <div className="disclaimer-body">
          <h3 className="disclaimer_header">
            <b>Disclaimers:</b>
          </h3>
          <span className="disclaimer">
            <b>
              1. You must be a member of ACM to participate in the workshops! If
              you are not a member, you will not be allowed in.
            </b>
          </span>
          <br />
          <span className="disclaimer">
            <b>
              2. Each workshop has its own dedicated date. Keep track of them,
              so you won't miss each workshop.
            </b>
          </span>
        </div>
        {/* Commenting videos for now because there's not yet new ones
        
        <div className="videoWrapper">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gCGZ_U_9jeY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        */}
        <div className="card programs-card">
          <Tab.Container id="left-tabs-example" defaultActiveKey={"current"}>
            <Nav className="project-tab-label" variant="pills">
              <Nav.Item>
                <Nav.Link
                  className="project-nav-link-tab anchor-white"
                  eventKey="current"
                >
                  {this.state.currentSem}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="project-nav-link-tab anchor-white"
                  eventKey="archive"
                >
                  Archive
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Col sm={12} className="programs-tab-container"></Col>
            {/*Starting here, each tab pane should be mapped*/}
            {/*Access total number of past mentorships*/}
            {/*Each event key must be identified as just index numbers 0 to n*/}
            {this.state.currentProgram && (
              <Tab.Content className="programs-tab-content">
                <Tab.Pane eventKey={"current"}>
                  <Mentorship mentorship={this.state.currentProgram} />
                </Tab.Pane>
                <Tab.Pane eventKey={"archive"}>
                  <ArchiveProgram mentorshipList={this.state.prevMentorship} />
                </Tab.Pane>
              </Tab.Content>
            )}
          </Tab.Container>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Programs;

import { collectionGroup, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Col, Tab, Nav } from "react-bootstrap";
import { db } from "../professional-events/firebaseConfig";
import ProDevBody from "./ProDevBody";

const ProDev = () => {
        const [currentSem, setCurrent] = useState(null);
      const [currentProgram, setProgram] = useState(null);

      const [isOpen, setIsOpen] = useState(false)
        const openModel = () => setIsOpen(true)
        const closeModel = () => setIsOpen(false)
    


    useEffect(() => {
        let isMounted = true
        const events = []
        

        const fetchData = async ()  => {
            try {
                const prodevRef = collectionGroup(db, "prodev")
                const prodevSnapshot = await getDocs(
                    query(prodevRef, orderBy("date", "desc"), limit(1))
                )

                prodevSnapshot.forEach((doc) => {
                    const data = doc.data()
                    events.push(data)

                })

                if(isMounted){
                    setProgram(events.at(0))
                    setCurrent(events.at(0).season)
                }
            }
            catch (err) {
                console.log("Error occured when fetching DB", err)
            }
        }
        fetchData()

        return () => {
            isMounted = false
        }
        
    }, [])


    return(
        <div className="programs-body">
      <div className="prodev-header-container">
        <div id="prodev-header-title">
          Participate in our Prodev program for Spring 2025!
        </div>
      </div>

      <div className="disclaimer-body">
        <h3 className="disclaimer_header">
          <b>Heads up!</b>
        </h3>

        <ul style={{listStyle: "none"}}>
          <li>
          <span className="disclaimer">
          <b>
            1. ACM membership is required to apply for the program!
            If you are not a member, you will not be allowed in.
          </b>
        </span>

          </li>
          <li>
          <span className="disclaimer">
          <b>
            2. This is a semester-long program.
          </b>
        </span>

          </li>
          <li>
          <span className="disclaimer">
          <b>
            3. Every other Thursday Starting Febuary 4th!
          </b>
        </span>

          </li>
        </ul>
        
      
        
      </div>
      <div className="card programs-card">
        <Tab.Container id="left-tabs-example" defaultActiveKey={"current"}>
          
          <Col sm={12} className="programs-tab-container"></Col>
          {currentProgram && (
            <Tab.Content className="programs-tab-content">
              <Tab.Pane eventKey={"current"}>
                <ProDevBody mentorship={currentProgram} /> 
                


                <div class="border-carousel"></div>
                <h2>
                  ❖{" "}
                  <span className="highlight-text">
                    Workshop Mentors and Guest Speakers:
                  </span>
                </h2>
                <br></br>
                <div className="mentor-carousel">
                  <Carousel infiniteLoop>
                    {currentProgram.speakers &&
                      currentProgram.speakers.map((leader) => {
                        return (
                          <>
                            <img
                              className="carousel-leader-image"
                              src={leader.img}
                              alt="leader"
                 
                            />
                            <p className="legend">{leader.name}</p>
                          </>
                        );
                      })}
                  </Carousel>
                </div>
              </Tab.Pane>
            </Tab.Content>
          )}
        </Tab.Container>
      </div>
    </div>
 
    )

}

export default ProDev
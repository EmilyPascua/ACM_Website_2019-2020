import React from 'react'
import firebase from '../professional/firebaseConfig.js';
import { Row, Col, Tab, Nav, Container, Button } from 'react-bootstrap'
import ModalImage from './ModalImage'
import 'bootstrap/dist/css/bootstrap.css'
import "./Programs.css"
import Mentorship from './Mentorship'
import flyerS2021 from "./pictures/spring2021-mentorship-flyer.png";

class Programs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMentorship1: false,
            showMentorship2: false,
            showTutoring: false
        }
    }
    state = {
        mentorship: null,
    }

    componentDidMount() {
        firebase.firestore().collection("mentorship").get()
            .then(snapshot => {
                const events = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    events.push(data)
                })
                this.setState({ mentorship: events })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="programs-body">
                <div className="quote-style-1 quote-bg">
                    <div className="d-flex justify-content-center">
                        <div className="quote-style-1">
                            <b>Get involved!<br></br>
                                Participate in our mentorship!</b>
                        </div>
                    </div>
                </div>

                {/* 
                Remember to update dates in the disclaimer: 
                1. Mentorship program signups open
                2. Signup deadline 
                */}

                <div className="disclaimer-body">
                    <h3 className="disclaimer_header"><b>Disclaimer!</b></h3>
                    <p><span className="disclaimer"><b>1. You must be a member of ACM to participate in the mentorship! If you are not a member, you will not be allowed in.</b></span></p>
                    <p><span className="disclaimer"><b>2. Deadline to apply for the mentorship program is Saturday, September 4, 2021.</b></span></p>
                </div>
                <br></br>
                <div className="card programs-card">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className="programs-nav-link anchor-white" eventKey="first">Fall 2021</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="programs-nav-link anchor-white" eventKey="second">Spring 2021</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="programs-nav-link anchor-white" eventKey="third">Fall 2020</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="programs-nav-link anchor-white" eventKey="fourth">Spring 2020</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="programs-nav-link anchor-white" eventKey="fifth">Fall 2019</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>
                                <Tab.Content className="programs-tab-content">


                                    <Tab.Pane eventKey="first">
                                        <Tab.Container defaultActiveKey="F2021mentorship">
                                            {/* deletes the Mentorship button */}
                                            {/* <Nav className="programs-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link-tab anchor-white" eventKey="S2021mentorship">Mentorship</Nav.Link>
                                                </Nav.Item>
                                            </Nav> */}

                                            <Tab.Content className="programs-tab-content">

                                                <Tab.Pane eventKey="F2021mentorship">
                                                    <div>
                                                        <Tab.Container defaultActiveKey="menteeRole">
                                                            <div className="program-description">
                                                                <Container>
                                                                    <div class="row justify-content-start space">
                                                                        <div class="col-sm-1 col-md-4">

                                                                            {
                                                                                this.state.mentorship &&
                                                                                this.state.mentorship.map(mentorship => {
                                                                                    return (
                                                                                        <img src={mentorship.imgUrl} className="img-fluid programs-poster" alt="mentorship flyer"></img>
                                                                                    )
                                                                                })                                
                                                                            }
                                                                        </div>
                                                                        <div class="col-sm-1 col-md-5">
                                                                            <p>
                                                                                <h2><span className="highlight-text"><b>Program Description</b></span></h2>
                                                                                <p>
                                                                                    In this world, it could be a bit difficult to find some footing for a stable, independent life. Thankfully, if you are one
                                                                                    of these people, you are not alone. If you become a mentee in this program, a mentor can show you the ropes to
                                                                                    not only help you on your way to landing that six-figure job, but also help you navigate the pothole-filled road called life.
                                                                                </p>
                                                                                <p className="program-description">
                                                                                    In this program, mentees will:
                                                                                </p>
                                                                                <p className=""> ❖<span className="highlight-text point"><b>Time Management</b></span><br />
                                                                                    ❖<span className="highlight-text point"><b>Building your Resume, Cover Letter, Thank You Letter</b></span><br />
                                                                                    ❖<span className="highlight-text point"><b>Behavioral and Technical Interviews</b></span><br />
                                                                                    ❖<span className="highlight-text point"><b>Creating professional social media accounts (Handshake, LinkedIn)</b></span><br />
                                                                                    ❖<span className="highlight-text point"><b>Technical Practices in the CS field (Agile, Waterfall)</b></span><br />
                                                                                    ❖<span className="highlight-text point"><b>Conferences</b></span><br />
                                                                                    ❖<span className="highlight-text point"><b>Finances</b></span><br />
                                                                                </p>

                                                                                <p className="program-description">The deadline to apply is Saturday, September 4, 2021. Join our mentorship program today before it's too late!</p>
                                                                                
                                                                                <Button variant="success" size="lg" href="https://forms.gle/CSdU5xJUDAPV1oEt6">Join Now!</Button><br />
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Container>
                                                            </div>
                                                            <Tab.Content className="programs-tab-content poster">
                                                                <Tab.Pane eventKey="menteeRole">
                                                                </Tab.Pane>
                                                            </Tab.Content>
                                                        </Tab.Container>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>


                                    <Tab.Pane eventKey="second">
                                        <Tab.Container defaultActiveKey="S2021mentorship">

                                            <Tab.Content className="programs-tab-content">
                                                <Tab.Pane eventKey="S2021mentorship">
                                                    <Mentorship flyer={flyerS2021} />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
                                    {/* Most recent mentorship program goes under this block of comment
                                    Steps:
                                    1. Copy a <Tab.Pane> from under this block of comment.
                                    2. Paste it beneath this block of comment.
                                    3. Modify it with the most recent mentorship program flyer and other information 
                                    (You can find it from the Mentorship.js file)
                                    */}
                                    <Tab.Pane eventKey="third">
                                        <Tab.Container defaultActiveKey="F2020mentorship">
                                            <Nav className="programs-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link-tab anchor-white" eventKey="F2020mentorship">Mentorship</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="programs-tab-content">

                                                <Tab.Pane eventKey="F2020mentorship">
                                                    <br></br>
                                                    {/* <iframe title="mentorship video" width="560" height="315" src="https://www.youtube.com/embed/zIB8AygK-TA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                                                    {/* <br></br> */}
                                                    <h2><span className="highlight-text">Program Description</span></h2>
                                                    Students in the mentorship program will gain professional and academic skills. They will learn to manage their time and tackle intimidating assignments. They will have opportunities to improve their public speaking skills, which will help them gain confidence.
                                                    They will be provided tips on internship hunting and resume/interview preparation. When students start earning money, they must manage their finances. As a result, it will be important for them to learn
                                                    about financial responsibility and investing tips.<br></br><br></br>
                                                    <img src={require("./pictures/fall2020-mentorship-flyer.png")} className="programs-poster" alt="mentorship flyer"></img>
                                                    {/* <Row>
                                                        <Col sm={4}>
                                                            <Image src={require("./pictures/spring2020-mentorship-flyer.png")} rounded />
                                                        </Col>
                                                    </Row><br></br><br></br> */}
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <Tab.Container defaultActiveKey="S2020mentorship">
                                            <Nav className="programs-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link-tab anchor-white" eventKey="S2020mentorship">Mentorship</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="programs-tab-content">

                                                <Tab.Pane eventKey="S2020mentorship">
                                                    <br></br>
                                                    <h2><span className="highlight-text">Program Description</span></h2>
                                                    Students in the mentorship program will gain professional and academic skills. They will learn to manage their time and tackle intimidating assignments. They will have opportunities to improve their public speaking skills, which will help them gain confidence.
                                                    They will be provided tips on internship hunting and resume/interview preparation. When students start earning money, they must manage their finances. As a result, it will be important for them to learn
                                                    about financial responsibility and investing tips.<br></br><br></br>
                                                    <img src={require("./pictures/spring2020-mentorship-flyer.png")} className="programs-poster" alt="mentorship flyer"></img>
                                                    {/* <Row>
                                                        <Col sm={4}>
                                                            <Image src={require("./pictures/spring2020-mentorship-flyer.png")} rounded />
                                                        </Col>
                                                    </Row><br></br><br></br> */}
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fifth">
                                        <Tab.Container defaultActiveKey="F2019mentorship">
                                            <Nav className="programs-tab-label" variant="pills">
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link-tab anchor-white" eventKey="F2019mentorship">Mentorship</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link-tab anchor-white" eventKey="F2019tutoring">Tutoring</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="programs-tab-content">

                                                <Tab.Pane eventKey="F2019mentorship">
                                                    <br></br>
                                                    <h2><span className="highlight-text">Program Description</span></h2>
                                                    Students in the mentorship program will gain professional and academic skills. They will learn to manage their time,
                                                    stay organized, and tackle intimidating assignments. They will also gain confidence, stay motivated, and learn to give advice.<br></br><br></br>
                                                    <img src={require("./pictures/fall2019-mentorship-flyer.png")} className="img-fluid programs-poster" alt="mentorship flyer"></img>
                                                    {/* <Row>
                                                        <Col sm={4}>
                                                            <Image src={require("./pictures/fall2019-mentorship-flyer.png")} rounded />
                                                        </Col>
                                                    </Row> */}
                                                    <br></br>
                                                    <h2><span className="highlight-text">Mentors and Mentees &amp; Winners of Mentorship Competition</span></h2>

                                                    <Container>
                                                        <img src={require('./pictures/fall2019-mentors-mentees.jpg')} alt="Mentors and Mentees" onClick={() => this.setState({ showMentorship1: true })} className="img-fluid programs-images"></img>
                                                        <img src={require('./pictures/fall2019-best-mentors-mentees.jpg')} alt="Best Mentors and Mentees" onClick={() => this.setState({ showMentorship2: true })} className="img-fluid programs-images"></img>
                                                        <ModalImage image='./pictures/fall2019-mentors-mentees.jpg' show={this.state.showMentorship1} onHide={() => this.setState({ showMentorship1: false })} />
                                                        <ModalImage image='./pictures/fall2019-best-mentors-mentees.jpg' show={this.state.showMentorship2} onHide={() => this.setState({ showMentorship2: false })} />
                                                    </Container>

                                                </Tab.Pane>
                                            </Tab.Content>
                                            <Tab.Content className="programs-tab-content">

                                                <Tab.Pane eventKey="F2019tutoring">
                                                    <br></br>
                                                    <h2><span className="highlight-text">Program Description</span></h2>
                                                    Tutors assist students in their introductory computer science and math classes. We provide additional insight on concepts that students are learning in their classes and
                                                    helpful tips on assignments. Academic success is very important!<br></br><br></br>

                                                    <h2><span className="highlight-text">Tutoring</span></h2>

                                                    <Container>
                                                        <img src={require('./pictures/tutoring.jpg')} alt="tutoring 2018" onClick={() => this.setState({ showTutoring: true })} className="programs-images"></img>
                                                        <ModalImage image='./pictures/tutoring.jpg' show={this.state.showTutoring} onHide={() => this.setState({ showTutoring: false })} />
                                                    </Container>

                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container><br></br>
                </div>
            </div>
        );
    }
}

export default Programs;
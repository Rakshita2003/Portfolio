import React from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import scr from '../media/SCR.png'
import MHC from '../media/MHC.png'
import WMS from '../media/WMS.png'
import BWS from '../media/BWS.png'
import FRT from '../media/FRT.png'
import tc from '../media/TC.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'

const Experience = ({ darkMode }) => {

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br />
            <Fade>
                <Container>
                    <br />
                    <h2 className="lead" align="center"><b>- Experience and Projects -</b></h2>
                    <br />
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={WMS} alt="Weather Monitoring System" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Weather Monitoring System</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Pre-final Year | Mini Project</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Domain - IOT & Cloud<br />Worked on Weather Monitoring System using IOT is an innovative solution that enables real-time collection and visualization of weather data using various sensors. The collected data is then transmitted to the Blynk Cloud platform, where it can be monitored remotely through a web interface.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={BWS} alt="Business Web Solutions" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Business Web Solutions</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Full Stack Development Intern</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Domain - Web Development
                                                        <br />Built a Star Wars Character generator using HTML, CSS, JavaScript, jQuery, Bootstrap and StarWars-API.
                                                        <br />Worked a Pokemon Game that randomly selects a character and displays information using HTML, CSS JavaScript.
                                                        <br />Developed Rock Paper Scissor Game, Pokemon Application and Banking Application using Python.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={scr} alt="Student Council" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Student Council</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Social Media Manager & Representative of Department of Electronics & Communication, UMIT</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>
                                                        <br />Managed and curated content for UMIT Instagram Page, fostering engagement and promoting campus events and initiatives.
                                                        <br />Managed and Organized “ARCANE ILLUSIONS 2022 & 2023” UMIT Cultural Fest with the core team.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                        </Row>
                    </Zoom>
                    <br />
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={FRT} alt="Microsoft" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Future Ready Talent | Microsoft</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Azure Developer</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Developed and deployed a Menstrual Hygiene ChatBot using Azure Bot Services, Azure Language Understanding, and Azure QnA Maker, providing users with accurate information, personalized support, and quick access to relevant resources for managing menstrual health.
                                                        views.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={tc} alt="InternExperience" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">InternExperience</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Project Intern</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Domain - Web Development<br />Developed a Travel Companion web application using React.js and React-Bootstrap for frontend, MySQL and AWS for database management, and Node.js with Express for the backend, facilitating seamless travel planning, itinerary management, and user interaction.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                           
                        </Row>
                    </Zoom>
                    <br />
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={tc} alt="Travel Companion" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Travel Companion</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Versatile application combining travel companion registration and travel information for seamless book/need assistance during trips. </p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Planned the website's UI meticulously and implemented using ReactJS and React-Bootstrap.
                                                    <br/> Database models were created utilizing AWS and MySQL, enabling efficient storage & retrieval of travel-related data. 
                                                    <br/>This platform aims to assist travelers in all aspects of trip planning, from itinerary creation to destination exploration.
                                                       
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                    <div>
                                        <a href="travelcompanion2023.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/Rakshita2003/TravelCompanion" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={MHC} alt="Menstrual Hygiene ChatBot" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Menstrual Hygiene ChatBot</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">During this internship, I developed Alya, a ChatBot for Women's to answer Menstrual Hygiene questions.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Developed and Deployed Menstrual Hygiene ChatBot using Azure Bot Services.
<br />Integrated Azure Language Understanding (ALU) for Enhanced User Interaction.
<br />Implemented Azure QnA Maker for Knowledge Base and FAQ’s.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                    <div>
                                        <a href="https://sites.google.com/view/menstrual-hygiene-chatbot/home" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/Rakshita2003/QnABotMenstrualHygiene" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br />
                                </Card>
                            </Col>
                           




                        </Row>
                    </Zoom>
                    <br />

                </Container>
            </Fade>
            <br />
            <hr />
            <br />
        </div>
    )
}

export default Experience
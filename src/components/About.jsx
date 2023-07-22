import React from 'react';
import { Fade } from "react-awesome-reveal";
import './styles.css';
import about from '../media/home.png';
import resume from '../media/RakshitaGowda_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = ({ darkMode }) => {

    let TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1800;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        let that = this;
        let delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        let elements = document.getElementsByClassName('txt-rotate');
        for (let i = 0; i < elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-rotate');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }

        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };

    return (
        <div>
            <br />
            <br />
            <Fade>
                <Container align='center'>
                    <Row>
                        <Col lg={8} align='center'>
                            <Card className="nbcard">
                                <Card.Body>
                                    <Card.Title><h2 className="lead">Let's have an introduction!</h2></Card.Title>
                                    <br />
                                    <Card.Text>
                                        <p align="justify">I believe in the ideology that <strong>learning is a continuous process that should never cease.<br /></strong>   <br />Currently, I am a final year student at Usha Mittal Institute of Technology, majoring in Electronics and Commuication. With a deep passion for development, I consider myself a full-stack developer with a genuine love for designing.<br /> I was always interested in multiple things, and multitasking gradually became a routine. I love networking, and I could spend hours talking about things. <br />If you offer me an opportunity, you have a great chance of having me, as I value the power of teamwork. I am always open to new connections.

                                            <br />  <br /><i><strong>Feel free to reach out and connect with me.</strong></i></p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} align='center'>
                            <Card className="nbcard">
                                <Card.Body>
                                    <Card.Title><h2 className="lead">Let's Connect!</h2></Card.Title>
                                    <br />
                                    <a href="https://www.linkedin.com/in/rakshitagowda" target="_blank" rel="noreferrer noopener">
                                        <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                                            <FontAwesomeIcon className="dark" size="lg" icon={faLinkedin} /> Rakshita___Gowda
                                        </Button>
                                    </a>

                                    <a href="https://github.com/Rakshita2003" target="_blank" rel="noreferrer noopener">
                                        <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                                            <FontAwesomeIcon className="dark" size="lg" icon={faGithub} /> Rakshita___Gowda
                                        </Button>
                                    </a>
                                    <a href={resume} download>
                                        <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                                            <FontAwesomeIcon className="dark" size="lg" icon={faFile} /> Download Resume
                                        </Button>
                                    </a>
                                    <img src={about} alt="connect" className="connect-img img-fluid animated" height="100px" width="200px" />

                                    {/* 187  290 */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <hr />
                    <br />
                </Container>
            </Fade>
        </div>
    );
};

export default About;
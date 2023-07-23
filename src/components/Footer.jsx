import React from 'react';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = ({ darkMode }) => {
    return (
        <div className="footer-text" >
            <br></br>
            <hr></hr>
            <div >
                <Col lg={6} xs={2}>
                    <br></br>
                    <div className='footer-row'>
                        <Card className="footer-nbcard">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="footer-btn">
                                <a href='https://www.linkedin.com/in/rakshitagowda/'> <FontAwesomeIcon className="skill" size='2x' icon={faLinkedin} /></a>
                            </Button>
                        </Card>

                        <Card className="footer-nbcard">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="footer-btn">
                                <a href='https://github.com/Rakshita2003'> <FontAwesomeIcon className="skill" size='2x' icon={faGithub} /></a>
                            </Button>
                        </Card>
                    </div>
                </Col>

            </div>


            <p className="footer-text" >Developed with &#9829; by Rakshita Gowda<br></br> </p>

        </div>
    );
};

export default Footer;
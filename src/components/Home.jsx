import React from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';
import home from '../media/home.png'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

import Card from 'react-bootstrap/esm/Card';

const Home = ({ darkMode }) => {
    return (
        <div>
            <div className='cards'>
        <Col lg={3} xs={12} >
                    <br></br>
                    <Card className="home-nbcard">
                        <Card.Body >
                            <Card.Title>Welcome to my Portfolio!</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                </div>

            <AttentionSeeker shakeX>
                <Row>
                    <Col lg={12} xs={12}>
                        <h1 className="display-3 hello" align="center" >Hello, It's Me <code> Rakshita Gowda</code> <br/></h1>
                        <h2 className="lead" align="center"> And I am a
                            <span
                                class="txt-rotate"
                                data-period="1000"
                                data-rotate='[ " Full-Stack Developer.", " Machine Learning Ethusiast.", "  working on Problem Solving.", " learner for life!" ]'>
                            </span>
                        </h2>

                    </Col>
                </Row>
                <Row>
                    <Container  align="center">
                        <Col lg={12} xs={12}>
                            <img src={home} alt="hello" className="hello-img" />
                        </Col>
                    </Container>
                </Row>

            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home;
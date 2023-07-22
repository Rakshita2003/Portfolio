import React from 'react';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal'
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import contact from '../media/contact.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'

const Contact = ({ darkMode }) => {

    const [templateParams, setTemplateParams] = useState({
        from_name: '',
        message: ''
    });

    const onInputChange = e => {
        setTemplateParams({ ...templateParams, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        emailjs.send('service_oo92mfl', 'template_5bo1lr6', templateParams, 'iDG6ZNMnsZm7X416a')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        swal({
            title: "Sent Successfully!",
            text: "Glad to hear from you! I will get back to you as soon possible",
            icon: "success",
        });
        setTemplateParams({
            from_name: '',
            message: ''
        })
    }

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br/>
            <Fade>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <br/>
                            <h2 className="lead">Contact me!</h2>
                            <p className="contact-text">Drop a suggestion, feedback, opportunity or we can colaborate on a project. Please mention your contact details if you are expecting a reply.</p>
                            <br/>
                            <img src={contact} alt="contact" className="contact-img img-fluid" height="150px" width="228px" />
                            <br/>
                        </Col>
                        <Col lg={8}>
                            <br/>
                            <Form onSubmit={e => onSubmit(e)}>
                                <Form.Group>
                                    <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" className="ph name" type="name" placeholder="Enter your name" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_email} name="from_email" className="ph name" type="email" placeholder="Enter your email" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onChange={e => onInputChange(e)} value={templateParams.message} name="message" as="textarea" rows={8} className="ph msg" placeholder="Enter your message" required />
                                </Form.Group>
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <br/>
                    </Row>
                </Container>
            </Fade>
        </div>
    )
}

export default Contact
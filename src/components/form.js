import React from "react";
import { Form, Button } from "react-bootstrap";

function ContactForm() {
    return (
        <Form>
            <h3>Send us a Message</h3>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email " />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows="5" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    );
}

export default ContactForm;

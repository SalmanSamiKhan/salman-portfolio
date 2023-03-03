import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import classnames from 'classnames';
import Alert from './Alerts';

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

export const ContactUs = () => {
  const form = useRef();
  const [alert, setAlert] = React.useState(null);

  const successAlert = {
    color: 'success',
    icon: 'ni ni-like-2',
    message: ' Your message has been sent successfully!',
  };

  const errorAlert = {
    color: 'danger',
    icon: 'ni ni-bell-55',
    message: ' Oops! Something went wrong. Please try again later.',
  };

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {

    // Validation using js

    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

    if (name === '' || mail === '' || message === '' || !mail.match(pattern)) {
      return
    }
    else {
      e.preventDefault();
      console.log();
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setName('')
            setMail('')
            setMessage('')
            setAlert(successAlert);
          },
          (error) => {
            console.log(error.text);
            setAlert(errorAlert);
          }
        );
    }
  };

  return (
    <>
      <section className="section section-lg section-shaped" id='contact'>
        <form ref={form} onSubmit={sendEmail}>
          {alert && (
            <Alert
              color={alert.color}
              icon={alert.icon}
              message={alert.message}
            />
          )}
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with me?</h4>
                    <p className="mt-0">
                      Reach out to me using the form below.
                    </p>
                    <FormGroup className={classnames('mt-5', {})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                          name="user_name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          name="user_email"
                          type="email"
                          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                          onChange={(e) => setMail(e.target.value)}
                          value={mail}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="user_message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        required
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                        onClick={sendEmail}
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
};

export default ContactUs;

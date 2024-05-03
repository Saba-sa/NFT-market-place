import React, { useState } from "react";
import { Container, Form, FormGroup } from "reactstrap";
import "./Contact.css";
const Contact = () => {
  const [detail, setdetail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <>
      <div className="bg">
        <div className="heading w-100  d-flex align-items-center justify-content-center">
          <h1 className="bg-transparent">Contact</h1>
        </div>
      </div>
      <Container className="my-5 text-center contact-container">
        <h5 className="fs-2">Drop a Message</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          ipsum aperiam cumque fugit suscipit animi natus nostrum voluptatem
          iste quam!
        </p>
        <Form>
          <FormGroup className="form-group">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={detail.name}
              onChange={(e) => {
                setdetail({ ...detail, name: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={detail.email}
              onChange={(e) => {
                setdetail({ ...detail, email: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup className="form-group">
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter your subject"
              value={detail.subject}
              onChange={(e) => {
                setdetail({ ...detail, subject: e.target.value });
              }}
            />
          </FormGroup>

          <FormGroup className="form-group">
            <textarea
              id="Description"
              placeholder="Enter description"
              col="10"
              value={detail.message}
              onChange={(e) =>
                setdetail({ ...detail, subject: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <button type="submit" className="px-3 py-2 btn-light send">
              Send a Message
            </button>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
};

export default Contact;

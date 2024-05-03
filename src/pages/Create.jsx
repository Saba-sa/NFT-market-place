import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import FormToADD from "../components/FormToADD/FormToADD.jsx";
import "./Create.css";
const Create = () => {
  // const [previewData, setpreviewData] = useState([
  //   {
  //     id: "09",
  //     title: "Title",
  //     desc: "Description",
  //     imgUrl: img08,
  //     creator: "Trista Francis",
  //     creatorImg: ava04,
  //     currentBid: 5.89,
  //     category: "music",
  //     size: "bundle",
  //   },
  // ]);
  return (
    <>
      <div className="bg">
        <div className="heading w-100  d-flex align-items-center justify-content-center">
          <h1 className="bg-transparent">Create Item</h1>
        </div>
      </div>
      <Container className="my-5">
        <Row>
          <Col lg="4">
            <h5>Preview Item</h5>
          </Col>
          <Col lg="8">
            <FormToADD />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Create;

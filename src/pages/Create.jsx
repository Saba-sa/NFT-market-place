import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import FormToADD from "../components/FormToADD/FormToADD.jsx";
import CardItem from "../components/Card/CardItem.jsx";
import { NFT__DATA } from "../assets/data/data.js";
import "./Create.css";
const Create = () => {
  const [previewData, setpreviewData] = useState([{ ...NFT__DATA[0] }]);
  console.log("prev", previewData);
  return (
    <>
      <div className="bg">
        <div className="heading w-100  d-flex align-items-center justify-content-center">
          <h1 className="bg-transparent">Create Item</h1>
        </div>
      </div>
      <Container className="my-5">
        <Row>
          <Col lg="4" md="4" sm="12" className="preview">
            <h5>Preview Item</h5>
            <CardItem itemDeatil={previewData[0]} />
          </Col>
          <Col lg="8" md="6" sm="12">
            <FormToADD item={previewData[0]} setpreviewData={setpreviewData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Create;

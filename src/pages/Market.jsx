import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Market.css";
const Market = () => {
  return (
    <>
      <div className="bg">
        <h1>MarketPlace</h1>
      </div>
      <Container>
        <Row>
          <Row>
            <Col lg="12">
              <div className="btns">
                <select name="category" id="category">
                  <option value="all">All Categores</option>
                </select>
              </div>
            </Col>
            <Col lg="12"></Col>
          </Row>
          <Col lg="12"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Market;

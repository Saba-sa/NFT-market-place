import React from "react";
import "./Topseller.css";
import { Col, Container, Row } from "reactstrap";
import Sellercard from "../../SellerCard/Sellercard";
import { SELLER__DATA } from "../../../assets/data/data.js";
const Topseller = () => {
  return (
    <Container className="seller">
      <Row>
        <Col lg="6" md="6">
          <div className="topseller-content">
            <h2>Top Seller</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Row className="pt-4">
          {SELLER__DATA.map((item, index) => {
            return <Sellercard key={index} item={item} />;
          })}
        </Row>
      </Row>
    </Container>
  );
};

export default Topseller;

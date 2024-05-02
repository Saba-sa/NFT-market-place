import React from "react";
import { Col } from "reactstrap";
import "./Sellercard.css";
const Sellercard = ({ item }) => {
  const { sellerImg, sellerName, currentBid } = item;
  return (
    <Col className="card-section mb-4" lg="2" md="3" sm="4" xs="6">
      <div className="seller-card d-flex align-items-center gap-3">
        <div className="w-50">
          <img src={sellerImg} alt={sellerName} className="w-100" />
        </div>
        <div className="seller-detail w-75">
          <h6>{sellerName}</h6>
          <p className="mb-2 text" tag="h6">
            {currentBid} ETH
          </p>
        </div>
      </div>
    </Col>
  );
};

export default Sellercard;

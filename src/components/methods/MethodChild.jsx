import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./MethodChild.css";

const MethodChild = ({ title, desc, icon }) => {
  return (
    <Col lg="3" md="5" sm="6" className="mt-4">
      <div className="single-step-section p-4 rounded-3">
        <span className="icon">
          <i className={`${icon} bg-transparent`}></i>
        </span>
        <div className="step-content bg-transparent mt-4 ">
          <h5 className="bg-transparent text-light">
            <Link to="/wallet" className="bg-transparent text-light">
              {title}
            </Link>
          </h5>
          <p className="bg-transparent">{desc}</p>
        </div>
      </div>
    </Col>
  );
};

export default MethodChild;

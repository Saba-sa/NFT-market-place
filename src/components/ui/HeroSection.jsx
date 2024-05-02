import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <Container className="hero-section">
      <Row>
        <Col lg="6" md="6">
          <div className="hero-content">
            <h2>
              Discover rare digital art and collect{" "}
              <span>sell extraordinary</span> NFTS
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              reiciendis quaerat pariatur! Necessitatibus, eaque assumenda harum
              quasi accusantium deserunt aut.
            </p>
            <div className="hero-btns d-flex align-items-center gap-3">
              <button className="d-flex align-items-center gap-1">
                <i className="ri-rocket-line fs-5"></i>
                <Link to="/market">Explore</Link>
              </button>
              <button className="d-flex align-items-center gap-1">
                <i className="ri-ball-pen-line fs-5"></i>
                <Link to="/create">Create</Link>
              </button>
            </div>
          </div>
        </Col>
        <Col lg="6" md="6">
          <div className="hero-img">
            <img src={require("../../assets/images/hero.jpg")} alt="hero" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;

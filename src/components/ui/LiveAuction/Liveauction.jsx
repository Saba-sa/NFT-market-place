import React from "react";
import { CardGroup, Col, Container, Row } from "reactstrap";
import CardItem from "../../Card/CardItem";
import { NFT__DATA } from "../../../assets/data/data";
import { Link } from "react-router-dom";
import "./Liveauction.css";
const Liveauction = () => {
  const data = NFT__DATA?.slice(0, 4);
  return (
    <Container className="liveaction">
      <Row className="mb-5">
        <Col
          lg="12"
          className="d-flex align-items-center justify-content-between"
        >
          <h2>Live Auction</h2>

          <Link to="/">
            <h6 className="explore"> Explore more</h6>
          </Link>
        </Col>
      </Row>
      <Row>
        <CardGroup className=" bg-transparent">
          {data.map((item, index) => {
            return <CardItem key={item.id} itemDeatil={item} />;
          })}
        </CardGroup>
      </Row>
    </Container>
  );
};

export default Liveauction;

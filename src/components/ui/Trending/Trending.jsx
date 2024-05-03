import React from "react";
import { CardGroup, Container, Row } from "reactstrap";
import CardItem from "../../Card/CardItem";
import { NFT__DATA } from "../../../assets/data/data";
import "./Trending.css";
const Trending = () => {
  return (
    <Container className="trending-section">
      <h2>Trending</h2>
      <Row className="mt-5">
        <CardGroup className=" bg-transparent flex-wrap">
          {NFT__DATA.slice(1, 9).map((data) => {
            return <CardItem key={data.id} itemDeatil={data} />;
          })}
        </CardGroup>
      </Row>
    </Container>
  );
};

export default Trending;

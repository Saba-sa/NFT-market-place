import React from "react";
import { CardGroup, Container, Row } from "reactstrap";
import CardItem from "../../Card/CardItem";
import { NFT__DATA } from "../../../assets/data/data";
import "./Trending.css";
const Trending = () => {
  return (
    <Container>
      <h2>Trending</h2>
      <Row>
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

import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import "./Card.css";
const CardItem = ({ itemDeatil }) => {
  const { title, currentBid, imgUrl, creatorImg, creator } = itemDeatil;
  console.log("iii", imgUrl);
  return (
    <Col lg="3" md="4" sm="5" xs="12" className="cardWhole">
      <Card className="p-3 cardSection m-2 mb-3 ">
        <CardImg alt="Card image cap" src={imgUrl} top width="100%" />
        <CardBody className="p-0 pt-2">
          <CardTitle tag="h6" className="bg-transparent">
            {title}
          </CardTitle>
          <Row className="mt-3 creator-detail  bg-transparent ">
            <Col lg="3" md="3" sm="3" xs="2" className="bg-transparent">
              <img src={creatorImg} alt="creator" className="bg-transparent" />
            </Col>
            <Col
              lg="5"
              md="5"
              sm="5"
              xs="6"
              className="bg-transparent seller-detail-card"
            >
              <CardSubtitle className="  bg-transparent">
                Created By
              </CardSubtitle>
              <CardText className="bg-transparent creator">{creator}</CardText>
            </Col>
            <Col
              lg="4"
              md="4"
              sm="5"
              xs="4"
              className="bg-transparent seller-detail-card-eth"
            >
              <CardSubtitle className=" bg-transparent ">
                Current Bid
              </CardSubtitle>
              <CardText className="bg-transparent">{currentBid} ETH</CardText>
            </Col>
          </Row>
          <Row className="bg-transparent my-3 card-btn">
            <Col className="bg-transparent ">
              <div className="btn d-flex gap-1">
                <i className="ri-shopping-bag-line bg-transparent"></i>
                Place Bid
              </div>
            </Col>
            <Col className="bg-transparent">
              <div className="btn no-bg history-btn">View History</div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardItem;

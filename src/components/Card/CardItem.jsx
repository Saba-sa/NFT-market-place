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
  return (
    <Col lg="3">
      <Card className="p-3 cardSection m-2">
        <CardImg alt="Card image cap" src={imgUrl} top width="100%" />
        <CardBody className="p-0 pt-2">
          <CardTitle tag="h6" className="bg-transparent">
            {title}
          </CardTitle>
          <Row className="mt-3 creator-detail bg-transparent">
            <Col lg="3" className="bg-transparent">
              <img src={creatorImg} alt="creator" className="bg-transparent" />
            </Col>
            <Col lg="5" className="bg-transparent">
              <CardSubtitle className="  bg-transparent">
                Created By
              </CardSubtitle>
              <CardText className="bg-transparent">{creator}</CardText>
            </Col>
            <Col lg="4" className="bg-transparent">
              <CardSubtitle className=" bg-transparent ">
                Current Bid
              </CardSubtitle>
              <CardText className="bg-transparent">{currentBid} ETH</CardText>
            </Col>
          </Row>
          <Row className="bg-transparent my-3">
            <Col className="bg-transparent ">
              <div className="btn d-flex gap-1">
                <i className="ri-shopping-bag-line bg-transparent"></i>
                Place Bid
              </div>
            </Col>
            <Col className="bg-transparent">
              <div className="btn no-bg">View History</div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardItem;

import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ListGroup,
  List,
  ListGroupItem,
} from "reactstrap";
import "./Footer.css";
const My_ACCOUNT = [
  {
    display: "Author Profile",
    url: "/sellerprofile",
  },
  {
    display: "EditProfile",
    url: "/editprofile",
  },
  {
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
  {
    display: "Edit Profile",
    url: "/edit-profile",
  },
];
const RESOURCES = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Actions",
    url: "#",
  },
];
const Companey = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "About us",
    url: "#",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container className="bg-black">
        <Row className="bg-black">
          <Col lg="3" md="6" sm="6">
            <div className="logo">
              <h2 className="d-flex  align-items-center bg-dark">
                <span>
                  <i className="ri-fire-fill"></i>
                </span>
                NFT
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                laborum animi ipsam sapiente harum sunt, autem accusantium
                laboriosam nostrum deleniti.
              </p>
            </div>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>My Account</h5>
            <ListGroup className="list_group">
              {My_ACCOUNT.map((item, index) => {
                return (
                  <ListGroupItem className="list_group_item" key={index}>
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Resources</h5>
            <ListGroup className="list_group">
              {RESOURCES.map((item, index) => {
                return (
                  <ListGroupItem className="list_group_item" key={index}>
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Information</h5>
            <ListGroup className="list_group">
              {Companey.map((item, index) => {
                return (
                  <ListGroupItem className="list_group_item" key={index}>
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6">
            <h5>Newsletters</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social_links d-flex gap-3  mt-2 px-3">
              <span>
                <Link to={"#"}>
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to={"#"}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to={"#"}>
                  <i className="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to={"#"}>
                  <i className="ri-telegram-line"></i>
                </Link>
              </span>
              <span>
                <Link to={"#"}>
                  <i className="ri-discord-line"></i>
                </Link>
              </span>
            </div>
          </Col>
          <Col lg="12">
            <p className="text-uppercase text-center">
              @copyright 2024 developed by saba ali
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

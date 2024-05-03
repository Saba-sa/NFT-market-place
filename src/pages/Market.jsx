import React, { useState } from "react";
import { CardGroup, Col, Container, Row } from "reactstrap";
import { NFT__DATA } from "../assets/data/data.js";
import CardItem from "../components/Card/CardItem.jsx";
import "./Market.css";
const Market = () => {
  const [data, setData] = useState(NFT__DATA || []);
  const [domain, setDomain] = useState(NFT__DATA || []);
  const [size, setSize] = useState("");
  const handleChange = (e) => {
    const temp = NFT__DATA?.filter((item) => {
      return item.category === e.target.value || e.target.value === "all";
    });
    setData(temp);
    setDomain(temp);
  };
  const handleSize = (e) => {
    const temp = domain?.filter((item) => {
      return item.size === e.target.value || e.target.value === "all";
    });
    setData(temp);
  };
  const handlePrices = (e) => {
    if (e.target.value === "low") {
      const temp = [...domain].sort((a, b) => a.currentBid - b.currentBid);
      setData(temp);
    } else if (e.target.value === "high") {
      const temp = [...domain].sort((a, b) => b.currentBid - a.currentBid);
      setData(temp);
    } else {
      setData(NFT__DATA);
    }
  };

  return (
    <>
      <div className="bg">
        <div className="heading w-100  d-flex align-items-center justify-content-center">
          <h1 className="bg-transparent">MarketPlace</h1>
        </div>
      </div>
      <Container className="my-5">
        <Row>
          <Col
            lg="2"
            md="4"
            sm="4"
            xs="10"
            className="d-flex justify-content-between mb-2"
          >
            <div className="select-btns">
              <select
                name="category"
                id="category"
                onChange={(e) => handleChange(e)}
              >
                <option value="all">All Categories</option>
                <option value="art">Art</option>
                <option value="music">Music</option>
                <option value="domain-name">Domain Name</option>
                <option value="virtual-world">Virtual World</option>
                <option value="trending-card">Trending Cards</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="4" sm="4" xs="10">
            <div className="select-btns">
              <select onChange={(e) => handleSize(e)}>
                <option value="all">All Items</option>
                <option value="single-item">Single Item</option>
                <option value="bundle">Bundle</option>
              </select>
            </div>
          </Col>
          <Col lg="7" md="4" sm="4" xs="10">
            <div
              className="select-btns text-end mt-4"
              onChange={(e) => {
                handlePrices(e);
              }}
            >
              <select>
                <option disabled>Sort By</option>
                <option value="high">High Rate</option>
                <option value="mid">Mid Rate</option>
                <option value="low">Low Rate</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <CardGroup className=" bg-transparent justify-content-center card-group">
            {data.length > 0 ? (
              data?.map((item, index) => {
                return <CardItem key={item.id} itemDeatil={item} />;
              })
            ) : (
              <p>No any Item of this category</p>
            )}
          </CardGroup>
        </Row>
      </Container>
    </>
  );
};

export default Market;

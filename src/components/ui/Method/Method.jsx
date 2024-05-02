import React from "react";
import MethodChild from "../../methods/MethodChild";
import { Col, Container, Row } from "reactstrap";
const Method = () => {
  const Steps_data = [
    {
      title: "Setup your wallet",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum",
      icon: "ri-wallet-line",
    },
    {
      title: "Create your collection",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum",
      icon: "ri-layout-masonry-line",
    },
    {
      title: "Add your NFTs",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum",
      icon: "ri-image-line",
    },
    {
      title: "List them for sale",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum",
      icon: "ri-list-check",
    },
  ];
  return (
    <Container className="steps-container mb-5 pb-4">
      <Row>
        <Col lg="12">
          <h3>Create and sell your NFTs</h3>
        </Col>
        {Steps_data.map((step) => {
          return (
            <MethodChild
              key={step.id}
              title={step.title}
              desc={step.desc}
              icon={step.icon}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Method;

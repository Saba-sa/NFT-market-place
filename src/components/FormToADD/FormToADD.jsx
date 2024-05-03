import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import "./FormToADD.css";
const FormToADD = () => {
  // const { price } = item;
  const handleChange = (e) => {
    console.log(e.target.files[0].name);
  };
  return (
    <Form>
      <FormGroup className="form-group">
        <Label for="file">Upload File</Label>
        <Input
          id="file"
          name="file"
          type="file"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="price">Price</Label>
        <Input
          id="price"
          type="number"
          placeholder="Enter price for one item (ETH)"
          // value={price}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="bid">Minimum Bid</Label>
        <Input id="bid" type="number" placeholder="Enter minimum bid" />
      </FormGroup>
      <div className="dates">
        <FormGroup className="form-group">
          <Label for="StartingDate">Starting Date</Label>
          <Input id="StartingDate" type="date" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="ExpirationDate">Expiration Date</Label>
          <Input id="ExpirationDate" type="date" />
        </FormGroup>
      </div>
      <FormGroup className="form-group">
        <Label for="title">Title</Label>
        <Input id="title" type="text" placeholder="Enter title" />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="Description">Description</Label>
        <textarea id="Description" placeholder="Enter description" col="10" />
      </FormGroup>
    </Form>
  );
};

export default FormToADD;

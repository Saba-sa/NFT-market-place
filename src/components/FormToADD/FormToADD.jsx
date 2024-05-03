import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import "./FormToADD.css";
const FormToADD = ({ item, setpreviewData }) => {
  const {
    title = "default title",
    desc = "default description",
    imgUrl,
    creator,
    minBid,
    creatorImg,
    currentBid,
    eDate,
    sDate,
  } = item;
  const handleimgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setpreviewData([{ ...item, imgUrl: imageUrl }]);
    }
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
            handleimgChange(e);
          }}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="price">Price</Label>
        <Input
          id="price"
          type="number"
          placeholder="Enter price for one item (ETH)"
          value={currentBid}
          onChange={(e) => {
            setpreviewData([{ ...item, currentBid: e.target.value }]);
          }}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="bid">Minimum Bid</Label>
        <Input
          id="bid"
          type="number"
          placeholder="Enter minimum bid"
          value={minBid}
          onChange={(e) => {
            setpreviewData([{ ...item, minBid: e.target.value }]);
          }}
        />
      </FormGroup>
      <div className="dates">
        <FormGroup className="form-group">
          <Label for="StartingDate">Starting Date</Label>
          <Input
            id="StartingDate"
            type="date"
            value={sDate}
            onChange={(e) =>
              setpreviewData([{ ...item, sDate: e.taget.value }])
            }
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="ExpirationDate">Expiration Date</Label>
          <Input
            id="ExpirationDate"
            type="date"
            value={eDate}
            onChange={(e) =>
              setpreviewData([{ ...item, eDate: e.taget.value }])
            }
          />
        </FormGroup>
      </div>
      <FormGroup className="form-group">
        <Label for="title">Title</Label>
        <Input
          id="title"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => {
            setpreviewData([{ ...item, title: e.target.value }]);
          }}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="Description">Description</Label>
        <textarea
          id="Description"
          placeholder="Enter description"
          col="10"
          value={desc}
          onChange={(e) => {
            setpreviewData([{ ...item, desc: e.target.value }]);
          }}
        />
      </FormGroup>
    </Form>
  );
};

export default FormToADD;

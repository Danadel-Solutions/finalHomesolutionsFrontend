import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  ToggleButton,
  ButtonGroup,
  Form,
  Button,
} from "react-bootstrap";
const Banner = () => {
  const [radioValue, setRadioValue] = useState("Rent");
  const radios = [
    { name: "forRent", value: "Rent" },
    { name: "forSale", value: "Sale" },
    { name: "shortLet", value: "Short Let" },
    { name: "land", value: "Land" },
  ];
  const handleChange = (e) => {
    setRadioValue(e.currentTarget.value);
  };
  console.log(radioValue);
  return (
    <div className="banner">
      <div className="banner-content">
        <Container className="text-center py-5">
          <h2 className="d-none d-md-block text-white mb-4">
            Find your property
          </h2>
          <Form>
            <ButtonGroup className="w-100">
              {radios.map((radio, index) => (
                <ToggleButton
                  className="radio-button  py-3 border-0 rounded-top"
                  key={index}
                  id={`radio-${index}`}
                  type="radio"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={handleChange}
                >
                  {radio.value}
                </ToggleButton>
              ))}
            </ButtonGroup>
            <Row className="  rounded py-5">
              <Col sm={12}>
                <Form.Control
                  size="lg"
                  placeholder="Enter a state, locality or area"
                  type="text"
                ></Form.Control>
              </Col>
              <Row
                sm={2}
                xs={2}
                md={4}
                lg={4}
                className=" my-5 d-flex justify-content-center align-content-center"
              >
                <Col>
                  <Form.Select
                    className="w-100 mb-3"
                    aria-label="Default select example"
                  >
                    <option>Type</option>
                    <option value="1">Flat/Apartment</option>
                    <option value="2">House</option>
                    <option value="3">Land</option>
                    <option value="3">Commercial</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select
                    className="w-100"
                    aria-label="Default select example"
                  >
                    <option>Bed</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="3">Four</option>
                    <option value="3">Five</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select
                    className="w-100"
                    aria-label="Default select example"
                  >
                    <option>Min Price</option>
                    <option value="1">2000</option>
                    <option value="2">4000</option>
                    <option value="3">5000</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select
                    className="w-100"
                    aria-label="Default select example"
                  >
                    <option>Max Price</option>
                    <option value="1">2000</option>
                    <option value="2">4000</option>
                    <option value="3">5000</option>
                  </Form.Select>
                </Col>
                <Button className="w-50 mt-5">Search</Button>
              </Row>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Banner;

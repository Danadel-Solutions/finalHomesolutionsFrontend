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
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const [radioValue, setRadioValue] = useState("Rent");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bedCount, setBedCount] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ radioValue, location, type, bedCount, minPrice, maxPrice });
    navigate("/search-result", {
      state: {
        purpose: radioValue,
        location,
        type,
        bedCount,
        minPrice,
        maxPrice,
      },
    });
  };
  return (
    <div className="banner">
      <div className="banner-content">
        <Container className="text-center py-5">
          <h2 className="d-none d-md-block text-white mb-4">
            Find your property
          </h2>
          <Form onSubmit={handleSubmit}>
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
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
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
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="">Type</option>
                    <option value="flat">Flat/Apartment</option>
                    <option value="house">House</option>
                    <option value="land">Land</option>
                    <option value="commercial">Commercial</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select
                    className="w-100"
                    aria-label="Default select example"
                    value={bedCount}
                    onChange={(e) => setBedCount(e.target.value)}
                  >
                    <option value="">Bed</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                    <option value="9">Nine</option>
                    <option value="10">Ten</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select
                    className="w-100"
                    aria-label="Default select example"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  >
                    <option value="">Min Price</option>
                    <option value="1000000">1000000</option>
                    <option value="2000000">2000000</option>
                    <option value="3000000">3000000</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select
                    className="w-100"
                    aria-label="Default select example"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  >
                    <option value="">Max Price</option>
                    <option value="1000000">1000000</option>
                    <option value="2000000">2000000</option>
                    <option value="3000000">3000000</option>
                  </Form.Select>
                </Col>
                <Button type="submit" className="w-50 mt-5">
                  Search
                </Button>
              </Row>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Banner;

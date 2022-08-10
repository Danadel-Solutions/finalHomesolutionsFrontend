import React from "react";
import { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addProperty } from "../actions/propertyActions";
import { useSelector, useDispatch } from "react-redux";

const AddPropertyForm = ({ userInfo }) => {
  const [firstTitle, setFirstTitle] = useState("");
  const [secondTitle, setSecondTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [toiletsCount, setToiletsCount] = useState("");
  const [bathroomCount, setBathroomCount] = useState("");
  const [bedroomCount, setBedroomCount] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [photos, setPhotos] = useState(null);
  const dispatch = useDispatch();
  const userToken = useSelector(
    (state) => state.userLogin.userInfo.access_token
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo]);

  const handleImageUpload = (e) => {
    setCoverPhoto(e.target.files[0]);
    console.log(coverPhoto);
  };
  // const handleImagesUpload = (e) => {
  //   const images = [];
  //   for (let i in e.target.files) {
  //     if (e.target.files.hasOwnProperty(i)) {
  //       images.push(e.target.files[i]);
  //     }
  //   }
  //   console.log(images);
  // };

  // const postProperty = async (propertyObject) => {
  //   try {

  //     const response = await axios.post(
  //       "http://localhost:8000/api/properties/add/",
  //       propertyObject,
  //       config
  //     );
  //     const data = await response.data;
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e.response.data);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("first_title", firstTitle);
    formData.append("second_title", secondTitle);
    formData.append("description", description);
    formData.append("price", +price);
    formData.append("type", type);
    formData.append("purpose", purpose);
    formData.append("location", location);
    formData.append("address", address);
    formData.append("toilet_count", +toiletsCount);
    formData.append("bathroom_count", +bathroomCount);
    formData.append("bedroom_count", +bedroomCount);
    formData.append("cover_photo", coverPhoto);
    formData.append("photos", photos);
    dispatch(addProperty(formData, userToken));
  };
  return (
    <div>
      <Container className="mb-3">
        <h4>Add Property form</h4>
        <Form className="mt-3" onSubmit={handleSubmit}>
          <Row xs={1}>
            <Col>
              <Form.Control
                type="input"
                placeholder="Please enter a title for your property"
                onChange={(e) => setFirstTitle(e.target.value)}
                value={firstTitle}
              />
            </Col>
            <Col>
              <Form.Control
                type="input"
                placeholder="Please enter the address for your property"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </Col>
            <Col>
              <Form.Control
                type="input"
                placeholder="Please enter a short description"
                onChange={(e) => setSecondTitle(e.target.value)}
                value={secondTitle}
              />
            </Col>
          </Row>
          <Row xs={2} sm={2} md={3} lg={3}>
            <Col>
              <Form.Select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Type</option>
                <option value="flat">Flat</option>
                <option value="house">House</option>
                <option value="land">Land</option>
                <option value="commercial">Commercial</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="">Purpose</option>
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
                <option value="shortlet">Shortlet</option>
                <option value="land">Land</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                value={bedroomCount}
                onChange={(e) => setBedroomCount(e.target.value)}
              >
                <option value="">Bedrooms</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                value={bathroomCount}
                onChange={(e) => setBathroomCount(e.target.value)}
              >
                <option value="">Bathrooms</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                value={toiletsCount}
                onChange={(e) => setToiletsCount(e.target.value)}
              >
                <option value="">Toilet</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Control
                vlue={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </Col>
            <Col>
              <Form.Control
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="propertyDescription">
                  Description
                </Form.Label>
                <textarea
                  name="description"
                  className="form-control"
                  id="propertyDescription"
                  rows="3"
                  placeholder="Add a description for your property"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></textarea>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <input
              type="file"
              placeholder="Enter image"
              onChange={handleImageUpload}
              className="form-control-file"
            />
          </Form.Group>
          {/* <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter image"
              onChange={handleImagesUpload}
              multiple
            ></Form.Control>
          </Form.Group> */}
          <Button type="submit" className="my-3">
            Submit Product
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddPropertyForm;

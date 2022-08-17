import React from "react";
import { Card, Col, Container, Row, Alert } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import getImageUrl from "../functions/getImageUrl";
// import picture from "../assets/Lagos-City.svg";
// import { products } from "../assets/products";
import Loader from "../UI/Loader";

const LatestListed = ({ propertyList }) => {
  return (
    <Container className="mt-5">
      <h5 className="topic">Latest Listed Projects</h5>
      {propertyList.loading && <Loader />}
      {propertyList.error && <p>Error</p>}
      {!propertyList.loading &&
        propertyList.properties &&
        propertyList.properties.length === 0 && (
          <Alert className="text-center" variant="info">
            No properties in this category
          </Alert>
        )}
      {propertyList.properties && propertyList.properties.length > 0 && (
        <Row xs={1} sm={2} md={3} className="g-4">
          {propertyList.properties.map((property) => (
            <Col key={property.id}>
              <Card>
                <Link to={`properties/${property.id}`}>
                  <Card.Img variant="top" src={property.cover_photo} />
                </Link>

                <Card.Body>
                  <Card.Title>{property.first_title}</Card.Title>
                  <Card.Text>{property.description}</Card.Text>
                  <Card.Text>
                    <i className="fa-solid fa-location-dot"></i>
                    {property.location}
                  </Card.Text>
                  <NumberFormat
                    value={property.price}
                    className="text-primary fw-bold"
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"NGN"}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default LatestListed;

import React from "react";
<<<<<<< HEAD
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import getImageUrl from "../functions/getImageUrl";
=======
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
>>>>>>> master
// import picture from "../assets/Lagos-City.svg";
// import { products } from "../assets/products";
import Loader from "../UI/Loader";

const LatestListed = ({ propertyList }) => {
  return (
    <Container className="mt-5">
      <h5 className="topic">Latest Listed Projects</h5>
      {propertyList.loading && <Loader />}
      {propertyList.error && <p>Error</p>}
<<<<<<< HEAD
      {propertyList.properties && (
=======
      {!propertyList.loading && propertyList.properties && propertyList.properties.length ==0 && <Alert  className = 'text-center' variant='info'>
      No properties in this category
    </Alert> }
      {propertyList.properties && propertyList.properties.length > 0 && (
>>>>>>> master
        <Row xs={1} sm={2} md={3} className="g-4">
          {propertyList.properties.map((property) => (
            <Col key={property.id}>
              <Card>
                <Link to={`properties/${property.id}`}>
                  <Card.Img variant="top" src={property.cover_photo} />
                </Link>

                <Card.Body>
<<<<<<< HEAD
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
=======
                  <Card.Title>{property.first_title}</Card.Title>
                  <Card.Text>
                    {property.description}
                  </Card.Text>
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
>>>>>>> master
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

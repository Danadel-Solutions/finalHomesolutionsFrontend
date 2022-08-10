import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
      {propertyList.properties && (
        <Row xs={1} sm={2} md={3} className="g-4">
          {propertyList.properties.map((property) => (
            <Col key={property.id}>
              <Card>
                <Link to={`properties/${property.id}`}>
                  <Card.Img variant="top" src={property.cover_photo} />
                </Link>

                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
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

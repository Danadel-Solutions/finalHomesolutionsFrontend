import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import iconOne from "../assets/icon3.png";
import iconTwo from "../assets/Artboard.png";

const FeaturedCompanies = () => {
  return (
    <Container className="mt-5 featured-companies">
      <h5 className="topic topic-companies">Featured Real Estate Companies</h5>
      <Row className="companies">
        <div>
          <Image src={iconTwo} />
        </div>
        <div>
          <Image src={iconOne} />
        </div>
      </Row>
    </Container>
  );
};

export default FeaturedCompanies;

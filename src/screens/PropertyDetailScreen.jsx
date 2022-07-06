import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
} from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from "../UI/Loader";
import NumberFormat from "react-number-format";
import axiosInstance from "../api/config";

const PropertyDetailScreen = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchProperty = async () => {
      try {
        const { data } = await axiosInstance.get(`/api/properties/${id}`);
        console.log(data);
        setProperty(data);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    fetchProperty();
  }, []);
  return (
    <>
      {loading && !property && <Loader />}
      {!loading && error && <p>Error</p>}
      {!loading && property && (
        <>
          <header className="bg-secondary p-2">
            <p className="container fw-bold text-black">
              The name of the Property
            </p>
          </header>
          <Container className="mt-5">
            <Row>
              <Col lg={8}>
                <div className="border p-1 d-none d-md-block">
                  <Link to="/">
                    <i className="fa-solid fa-arrow-left me-2"></i>Back to
                    property list
                  </Link>
                </div>
                <Row>
                  <Col md={10}>
                    <p className="text-grey fw-bold">
                      Mixed used land for sale
                    </p>
                    <p>Few Minutes from Epe T Junction, Epe, Lagos</p>
                  </Col>
                  <Col>
                    <NumberFormat
                      value={property.price}
                      className="text-primary fw-bold"
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"NGN"}
                      renderText={(value, props) => <p {...props}>{value}</p>}
                    />
                    {/* <p className="text-primary fw-bold"> {property.price} </p> */}
                    {/* <p>per plot</p> */}
                  </Col>
                </Row>
                <Image
                  className="product-detail-image"
                  src={property.cover_photo}
                />
                <Row>
                  <Col className="border p-3">Toilet</Col>
                  <Col className="border p-3">Bedroom</Col>
                  <Col className="border p-3">Bathrooms</Col>
                </Row>
                <div>
                  <p>Interested in Property?</p>
                  <p>Call 09015575260</p>
                </div>
              </Col>
              <Col>
                <header className="bg-secondary px-3 py-1">
                  {" "}
                  <p className="fw-bold">Marketed by</p>{" "}
                </header>
                <div className="border px-3">
                  <p className="fw-bold">Unique Properties</p>
                  <p>
                    <i className="fa-solid fa-location"></i>1, Odukunle Street,
                    ikorodu, Lagos, Nigeria
                  </p>
                  <p>
                    <i className="fa-solid fa-phone-flip"></i>08123459432
                  </p>
                  <p>
                    <i className="fa-brands fa-whatsapp"></i>09012348790
                  </p>
                  <p>
                    <i className="fa-solid fa-user"></i>Registered 2 years ago
                  </p>
                  <p>View all properties from this agent</p>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default PropertyDetailScreen;

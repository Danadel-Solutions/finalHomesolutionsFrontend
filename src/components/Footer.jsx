import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="w-100 footer">
      <div className="w-100 footer-top">
        <Container className="footer-top-container">
          <p style={{ padding: "10px 0" }}>
            A Developer or an agent? Post your property for FREE{" "}
          </p>
          <Button style={{ maxWidth: "150px" }} className="footer-button">
            CLICK HERE
          </Button>
        </Container>
      </div>
      <div className="w-100 footer-bottom">
        <Container>
          <Row xs={1} sm={1} md={2} lg={2} xl={2}>
            <Col>
              <h5>About us</h5>
              <p>
                Write what you think should be here. <br />
                Write what you think should be here. <br />
                Write what you think should be here. <br />
                Write what you think should be here. <br />
                Write what you think should be here. <br />
                Write what you think should be here. <br />
                Write what you think should be here. <br />
                Write what you think should be here. <br />
              </p>
              <Button>Read more</Button>
            </Col>
            <Col className="mt-5">
              <h5>Follow us</h5>
              <i className="fa-brands fa-facebook-f social-icon"></i>
              <i className="fa-brands fa-instagram social-icon"></i>

              <h5>Useful Links</h5>
              <a>Property Blog</a>
              <a>Contact us</a>
              <a>Privacy Policy</a>
              <a>Terms of use</a>
              <a>FAQ</a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

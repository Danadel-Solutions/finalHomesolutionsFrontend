import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FaBuilding } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiSelfLove } from "react-icons/gi";

const Profile = ({ userInfo }) => {
  const iconStyles = {
    fontSize: "50px",
  };
  return (
    <>
      <Helmet>
        <title>{`Welcome ${userInfo.user.first_name}`}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`${userInfo.user.first_name}'s Dashboard`}
        />
      </Helmet>
      <header className="bg-secondary p-2">
        <p className="container">
          Welcome {userInfo.user.first_name + " " + userInfo.user.last_name}{" "}
        </p>
      </header>
      <Container className="mt-5">
        <Row xs={1} sm={1} md={2} lg={3}>
          <Col>
            <div className="icon-container w-100 mb-4 d-flex align-items-center justify-content-center border rounded py-5">
              <FaBuilding style={iconStyles} />
            </div>
          </Col>
          <Col>
            <div className="icon-container w-100 mb-4 d-flex align-items-center justify-content-center border rounded py-5">
              <CgProfile style={iconStyles} />
            </div>
          </Col>
          <Col>
            <div className="icon-container w-100 mb-4 d-flex align-items-center justify-content-center border rounded py-5">
              <GiSelfLove style={iconStyles} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;

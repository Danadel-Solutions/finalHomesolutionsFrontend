import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loggedInUserInfo = useSelector((state) => state.userLogin.userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    // console.log(loggedInUserInfo);
  };

  return (
    <div className="accounts-background">
      <Helmet>
        <title>HomeSolutions - Login</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Log in to your account" />
      </Helmet>
      <Container className="align-content-center justify-content-center mt-5">
        <Row className="justify-content-center align-content-center">
          <Col sm={10} md={8}>
            <h5>Login</h5>
            <Form onSubmit={handleSubmit} className="bg-white rounded p-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-green">Email</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me logged in" />
              </Form.Group>

              <Button className="w-100" variant="primary" type="submit">
                Login
              </Button>
              <p className="text-sm-center text-md-end">
                Forgot your password?
              </p>
              <p className="text-center">
                <Link className="text-decoration-none" to={"/signup"}>
                  No account? Register
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

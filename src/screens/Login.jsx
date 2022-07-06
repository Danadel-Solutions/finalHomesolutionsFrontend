import React, { useEffect } from "react";
import { Col, Button, Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { object, string, ref } from "yup";
import { Formik, Form, useField, ErrorMessage } from "formik";
import Input from "../UI/Input";

const Login = () => {
  const LoginValidation = object().shape({
    email: string()
      .required("Valid Email Required")
      .email("Valid Email Required"),
    password: string()
      .min(8, "Password must be at least 8 character long")
      .required("Required"),
  });
  const dispatch = useDispatch();
  const userLoginState = useSelector((state) => state.userLogin);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(login(values.email, values.password));
    if (userLoginState.userInfo) {
      navigate("/dashboard", { replace: true });
    } else {
      return;
    }
  };
  useEffect(() => {
    if (userLoginState.userInfo) {
      navigate("/dashboard");
    }
  }, []);

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
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={LoginValidation}
              // validationSchema={null}
            >
              {() => {
                return (
                  <Form className="bg-white rounded p-5">
                    <Input type="email" name="email" label="Email" />
                    <Input type="password" name="password" label="Password" />
                    {userLoginState.error && (
                      <p className="text-danger">{userLoginState.error}</p>
                    )}
                    <Button
                      disabled={userLoginState.loading}
                      className="w-100 my-4"
                      variant="primary"
                      type="submit"
                    >
                      {userLoginState.loading ? "Please wait" : "Submit"}
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
                );
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

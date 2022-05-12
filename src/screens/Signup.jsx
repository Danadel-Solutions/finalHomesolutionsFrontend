import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Button } from "react-bootstrap";
import { Formik, Form, useField, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../actions/RegisterUserActions";
import Input from "../UI/Input";
import { object, string, ref } from "yup";
const phoneRegExp = /^([0]{1})[0-9]{10}$/;
const RegisterValidation = object().shape({
  firstName: string().required("Required"),
  middleName: string().required("Required"),
  lastName: string().required("Required"),
  email: string()
    .required("Valid Email Required")
    .email("Valid Email Required"),
  password: string()
    .min(8, "Password must be at least 8 character long")
    .required("Required"),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords do not match"),
  phone: string()
    .matches(phoneRegExp, "Please input a valid phone number")
    .required("Phone number is required"),
});
const Signup = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(register(values));
  };
  return (
    <div className="accounts-background">
      <Helmet>
        <title>HomeSolutions - Signup</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Sign up page" />
      </Helmet>
      <Container className="mt-5" fluid>
        <h5>Sign up</h5>

        <Formik
          initialValues={{
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={RegisterValidation}
          // validationSchema={null}
        >
          {() => {
            return (
              <Form className="bg-white rounded p-4">
                <Row md={2}>
                  <Input name="firstName" label="First Name" />
                  <Input name="middleName" label="Middle Name" />
                  <Input name="lastName" label="Last Name" />
                  <Input type="email" name="email" label="Email" />
                  <Input type="password" name="password" label="Password" />
                  <Input
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                  />
                  <Input type="tel" name="phone" label="Phone number" />
                </Row>
                <Button type="submit" className="mt-4 w-50">
                  Register
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
};

export default Signup;

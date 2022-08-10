import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="row justify-content-center mt-5 ">
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default Loader;

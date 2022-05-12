import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { ErrorMessage, useField } from "formik";
const Input = ({ name, label, type, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div>
      <FormGroup>
        <FormLabel> {label} </FormLabel>
        <FormControl
          className={`border ${
            meta.error && meta.touched ? "border-danger" : ""
          }`}
          type={type}
          {...field}
          {...props}
        />
      </FormGroup>
      <ErrorMessage className="text-danger" name={field.name} component="div" />
    </div>
  );
};

export default Input;

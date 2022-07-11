import React from "react";
import { Field } from "formik";

const InputField = ({ errors, name, touched, ...rest }) => {
  return (
    <div className="input-field">
      <div className="input">
        <Field name={name} {...rest} />
      </div>
      {errors && touched && errors[name] && touched[name] ? (
        <div className="input-error-display">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default InputField;

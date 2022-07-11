import { Formik } from "formik";
import React from "react";
import InputField from "../../../components/inputs/InputField";

const Register = () => {
  return (
    <div>
      Register
      <Formik initialValues={{ firstName: "" }}>
        {({ errors, touched }) => (
          <InputField name="firstName" errors={errors} touched={touched} />
        )}
      </Formik>
    </div>
  );
};

export default Register;

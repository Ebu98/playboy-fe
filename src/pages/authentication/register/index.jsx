import { Formik, Form } from "formik";
import React from "react";
import InputField from "../../../components/inputs/InputField";
import image from "../../../assests/icons/Sea.png"
import "./register.scss"

const Register = () => {
  return (
    <div className="register-form">
      <img src={image} alt=""/>
      <div className="register">
      <h4 >Register your account.</h4>
      <span className="span">Fill the details to submit register account.</span>
      
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log( values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-contanier">
            <InputField
              name="firstName"
              placeholder="firstname"
              errors={errors}
              touched={touched}
            />
            <InputField
              name="lastName"
              placeholder="lastname"
              errors={errors}
              touched={touched}
            />
            <InputField
              name="email"
              placeholder="Email"
              errors={errors}
              touched={touched}
            />
            <InputField
              name="password"
              placeholder="Password"
              errors={errors}
              touched={touched}
            />
            <InputField
              name="confirmPassword"
              placeholder="Confirmpassword"
              errors={errors}
              touched={touched}
            />
            <button className="custom-button" type="submit">
              Continue
            </button>
            <div className="container">
            <span>Already have an account?</span>
            <span className="navigate-login">Login</span>
            </div>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
};

export default Register;


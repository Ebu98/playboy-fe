import React from "react";
import { Formik, Form } from "formik";
import InputField from "../../../components/inputs/InputField";
import image from "../../../assests/icons/Sea.png";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-form">
      <img src={image} alt="" />
      

      <div className="login">
      <div className="navigate-signup">
        <span>Don't have an account?</span>
        <h4>Signup</h4>
      </div>
        <h4>Welcome.</h4>
        <span className="span">Login to continue.</span>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-contanier">
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
              <div className="container">
                <label>
                  <input type="checkbox" name="personality" /> Remember me.
                </label>
                <span className="navigate-login">Forgot Password?</span>
              </div>
              <button className="custom-button" type="submit">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

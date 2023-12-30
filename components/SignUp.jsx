import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUpForm.css";
import { context } from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";



const SignUpForm = () => {
  const navigate=useNavigate();
  const UserData=useContext(context);
  const {users,setusers}=UserData;
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Must contain at least one uppercase, one lowercase, one number and one special character"
      )
      .min(8, "Must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    setusers([...users,values]);
    console.log(users);
    navigate('/login');
  };

  return (
    <div className="kunjimon">
    <div className="upform">
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="">
            <div className="up-group">
              <label htmlFor="name">Name</label>
              <Field name="name" className="form-stuff " />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="up-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-stuff " />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="up-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-stuff " />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div className="up-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                className="form-stuff "
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>
            <button>
    Sign up
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default SignUpForm;

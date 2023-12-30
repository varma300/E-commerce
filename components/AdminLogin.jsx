import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import { context } from "./Context";
import { useContext } from "react";
import { Link, useNavigate} from 'react-router-dom';



const AdminLogin = () => {
  const navigate = useNavigate();
  const UserData=useContext(context);
  const {admin}=UserData;
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Must contain at least one uppercase, one lowercase, one number and one special character"
      )
      .min(8, "Must be at least 8 characters")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    const email=values.email;
    const password=values.password;
    console.log(typeof password);

  
    console.log(typeof email);
    const filterUSer=admin.filter((element)=>element.email===email&&element.password===password);
    if(filterUSer.length>0){
      navigate('/admin/search')
  }
  else{
    alert('User Not Exist')
  }
  }

  return (
  <div className="beef">
    <div className="inform">
      <h2>ADMIN</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
           
            <div className="in-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-things" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="in-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-things" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" className="btn btn-primary in-button">
              LOGIN
            </button>
          </Form>
        )}
      </Formik>

    </div>
    </div>
  );
};

export default AdminLogin;

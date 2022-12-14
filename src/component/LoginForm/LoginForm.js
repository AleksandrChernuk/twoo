import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required().min(6).max(15).required(),
});

const initialValues = {
  login: "",
  password: "",
};

const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          <Field type="text" name="login" />
          <ErrorMessage name="login" component="div" />
          Loggin
        </label>

        <label htmlFor="password">
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          Password
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

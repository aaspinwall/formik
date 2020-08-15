import React from "react"
import { useFormik } from "formik"
import styled from "styled-components"
import { Wrapper } from "./FormComponents"

/* export const Wrapper = styled.form`
  form {
    display: grid;
    padding: 2rem 15%;
  }
  span {
    height: 1.5rem;
  }
  > * {
    margin: 0.5rem 0 0;
    padding: 0.5rem;
  }
` */

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = "Required"
  }

  if (!values.email) {
    errors.email = "Required"
  }
  if (!values.password) {
    errors.password = "Required"
  } else if (values.password.length < 5) {
    errors.password = "Password must be longer than 5 characters"
  }
  return errors
}

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const { getFieldProps, handleSubmit, values, touched, errors } = formik

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...getFieldProps("name")}></input>
        {errors.name && touched.name ? (
          <span>{errors.name}</span>
        ) : (
          <span></span>
        )}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...getFieldProps("email")}></input>
        {errors.email && touched.email ? (
          <span>{errors.email}</span>
        ) : (
          <span></span>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...getFieldProps("password")}
        ></input>
        {errors.password && touched.password ? (
          <span>{errors.password}</span>
        ) : (
          <span></span>
        )}
        <button type="submit">Sign up</button>
      </form>
    </Wrapper>
  )
}

export default MyForm

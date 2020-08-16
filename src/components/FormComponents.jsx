import React, { useEffect } from "react"
import { Form, Field, ErrorMessage, Formik } from "formik"
import styled from "styled-components"

export const Wrapper = styled.form`
  form {
    font-family: Mulish;
    display: grid;
    padding: 2rem 15%;
  }

  > * {
    margin: 0.5rem 0 0;
    padding: 0.5rem;
    > * {
      border-radius: 6px;
    }
  }
  select {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
`

const Input = styled(Field)`
  padding: 0.5rem;
  margin-bottom: 1rem;
`
const Label = styled.label`
  margin: 0.5rem 0;
`
const Error = styled(ErrorMessage)`
  font-size: 0.7rem;
  color: red;
`
const Button = styled.button`
  padding: 0.5rem;
  border-radius: 15px;
  margin: 0.15rem 0;
  font-weight: bold;
  background: #ff715b;

  :disabled {
    background: papayawhip;
  }
`

const placeholders = {
  name: "Name",
  email: "example@mail.com",
  password: "Not password123",
}
const initialValues = {
  name: "",
  email: "",
  password: "",
  color: "default",
}

const validate = async values => {
  const errors = {}
  if (!values.name) errors.name = "This field is required"

  if (!values.email) errors.email = "This field is required"

  if (!values.password) errors.password = "This field is required"

  if (values.color === "default") errors.color = "Pick a color"

  return errors
}

const MyForm = () => {
  useEffect(() => {
    const inputs = document.getElementsByTagName("input")
    Object.values(inputs).forEach(v => {
      v.autocomplete = "off"
      v.ariaAutoComplete = "off"
    })
  }, [])
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 2000)
          }
        }}
        handleReset={() => console.log("reset")}
      >
        {({ isSubmitting, handleReset, isValid, isValidating }) => (
          <Form>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder={placeholders.name}
            ></Input>
            <Error name="name" component="span" />

            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" placeholder={placeholders.email} />
            <Error name="email" component="span" />

            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder={placeholders.password}
            />
            <Error name="password" component="span" />
            <Label>Favorite color</Label>
            <Field name="color" as="select" placeholder="Favorite Color">
              <option value="default" disabled="true">
                Select
              </option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Error name="color" component="span" />
            <Button type="reset" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit" disabled={isValid && isSubmitting}>
              Sign up
            </Button>
            <Error name="login" component="span" />
            <div>{isValidating ? "...Validating" : null}</div>
            <div>{isSubmitting ? "...Submitting" : null}</div>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default MyForm

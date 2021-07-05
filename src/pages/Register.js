import React from 'react';
import { Row, Button, Form } from 'react-bootstrap';
import Layout from '../components/layout';
import FormInput from '../components/formInput/formInput';
import useForm from '../components/useForm/useForm';

const Register = () => {
  const { values, handleChange } = useForm();
  const handleSubmit = () => {
  };

  return (
    <Layout>
      <Row>
        <Row className="d-flex mx-0 p-4 align-items-center w-100 justify-content-between">
          <h5 className="text-uppercase">Login</h5>

        </Row>

        <Form onSubmit={handleSubmit} className="col-12">
          <Form.Group className="mb-3 d-flex flex-column col-12">
            <FormInput
              groupClass="d-flex flex-column px-0 pt-3"
              inputClass="p-3  border border-success"
              labelClass="text-uppercase font-weight-light"
              name="email"
              label="email"
              type="email"
              handleChange={handleChange}
              value={values.email}
            />

            <FormInput
              groupClass="d-flex flex-column px-0 pt-3"
              inputClass="p-3  border border-success"
              labelClass="text-uppercase font-weight-light"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              handleChange={handleChange}
              value={values.password}
            />

            <FormInput
              groupClass="d-flex flex-column px-0 pt-3"
              inputClass="p-3  border border-success"
              labelClass="text-uppercase font-weight-light"
              name="passwordRepeat"
              label="Password Repeat"
              type="password"
              handleChange={handleChange}
              value={values.passwordRepeat}
            />

            <FormInput
              groupClass="d-flex flex-column px-0 pt-3"
              inputClass="p-3  border border-success"
              labelClass="text-uppercase font-weight-light"
              name="firstName"
              label="First Name"
              type="text"
              handleChange={handleChange}
              value={values.firstName}
            />

            <FormInput
              groupClass="d-flex flex-column px-0 pt-3"
              inputClass="p-3  border border-success"
              labelClass="text-uppercase font-weight-light"
              name="lastName"
              label="Last Name"
              type="text"
              handleChange={handleChange}
              value={values.lastName}
            />

            <Form.Group className="d-flex flex-column px-0 pt-5">
              <Button
                className="btn-flat py-3  text-center rounded-0 border-0"
                type="submit"
              >
                Register
              </Button>
            </Form.Group>
          </Form.Group>
        </Form>

      </Row>
    </Layout>
  );
};

export default Register;

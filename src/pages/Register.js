import React from 'react';
import { useSelector } from 'react-redux';
import {
  Row, Button, Form, Col,
} from 'react-bootstrap';
import Layout from '../components/layout';
import FormInput from '../components/formInput/formInput';
import useForm from '../components/useForm/useForm';
import validateRegistration from '../components/useForm/validateRegistration';

const Register = () => {
  const state = useSelector((state) => state.register);
  const { submitted, users } = state;
  const {
    values, errors, handleChange, handleSubmit,
  } = useForm(validateRegistration, users);

  return (
    <Layout>
      <Row className="d-flex justify-content-center">
        <Row className="d-flex mx-0 pt-2 justify-content-center w-100">
          {submitted ? <h5 className="text-uppercase text-success ">Registration Successful</h5> : <h5 className="text-uppercase">Register</h5>}
        </Row>
        <Col lg={6} md={12}>
          <Form onSubmit={handleSubmit} className="col-12 w-100">
            <Form.Group className="mb-3 d-flex flex-column  col-12">
              <FormInput
                groupClass="d-flex flex-column px-0 pt-1"
                inputClass={`p-2  border ${errors.email ? 'border-danger' : 'border-success'}`}
                labelClass="text-uppercase font-weight-light"
                name="email"
                label="email"
                type="email"
                handleChange={handleChange}
                value={values.email}
              />
              {errors.email && <p className="text-danger text-uppercase">{errors.email}</p>}
              <FormInput
                groupClass="d-flex flex-column px-0 pt-1"
                inputClass={`p-2  border ${errors.password ? 'border-danger' : 'border-success'}`}
                labelClass="text-uppercase font-weight-light"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                handleChange={handleChange}
                value={values.password}
              />
              {errors.password && <p className="text-danger text-uppercase">{errors.password}</p>}
              <FormInput
                groupClass="d-flex flex-column px-0 pt-1"
                inputClass={`p-2  border ${errors.passwordRepeat ? 'border-danger' : 'border-success'}`}
                labelClass="text-uppercase font-weight-light"
                name="passwordRepeat"
                label="Password Repeat"
                autoComplete="current-password"
                type="password"
                handleChange={handleChange}
                value={values.passwordRepeat}
              />
              {errors.passwordRepeat && <p className="text-danger text-uppercase">{errors.passwordRepeat}</p>}
              <FormInput
                groupClass="d-flex flex-column px-0 pt-1"
                inputClass={`p-2  border ${errors.firstName ? 'border-danger' : 'border-success'}`}
                labelClass="text-uppercase font-weight-light"
                name="firstName"
                label="First Name"
                type="text"
                handleChange={handleChange}
                value={values.firstName}
              />
              {errors.firstName && <p className="text-danger text-uppercase">{errors.firstName}</p>}

              <FormInput
                groupClass="d-flex flex-column px-0 pt-1"
                inputClass={`p-2  border ${errors.lastName ? 'border-danger' : 'border-success'}`}
                labelClass="text-uppercase font-weight-light"
                name="lastName"
                label="Last Name"
                type="text"
                handleChange={handleChange}
                value={values.lastName}
              />
              {errors.lastName && <p className="text-danger text-uppercase">{errors.lastName}</p>}

              <Form.Group className="d-flex flex-column px-0 pt-5">
                <Button
                  className="btn-flat py-3  text-center rounded-0 border-0 text-uppercase"
                  type="submit"
                >
                  Register
                </Button>
              </Form.Group>
            </Form.Group>
          </Form>
        </Col>
      </Row>

    </Layout>
  );
};

export default Register;

import React from 'react';
import { Row, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/layout';
import FormInput from '../components/formInput/formInput';
import useForm from '../components/useForm/useForm';
import validate from '../components/useForm/validateInfo';
import { addUser } from '../redux/registeReducer/regActions';

const Register = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.register);
  const { submitting } = state;

  const {
    values, errors, handleChange, setErrors,
  } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    const user = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };
    if (submitting) {
      dispatch(addUser(user));
    }
  };

  return (
    <Layout>
      <Row>
        <Row className="d-flex mx-0 p-4 align-items-center w-100 justify-content-between">
          <h5 className="text-uppercase">Register</h5>

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
            {errors.email && <p className="text-danger text-uppercase">{errors.email}</p>}
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
            {errors.password && <p className="text-danger text-uppercase">{errors.password}</p>}
            <FormInput
              groupClass="d-flex flex-column px-0 pt-3"
              inputClass="p-3  border border-success"
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
              groupClass="d-flex flex-column px-0 pt-3"
              inputClass="p-3  border border-success"
              labelClass="text-uppercase font-weight-light"
              name="firstName"
              label="First Name"
              type="text"
              handleChange={handleChange}
              value={values.firstName}
            />
            {errors.firstName && <p className="text-danger text-uppercase">{errors.firstName}</p>}

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
            {errors.lastName && <p className="text-danger text-uppercase">{errors.lastName}</p>}

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

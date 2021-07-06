import React, { useEffect, useState } from 'react';
import { Row, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout';
import FormInput from '../components/formInput/formInput';
import validateLogin from '../components/useForm/validateLogin';
import { setLoggedInUser, setLoggedIn } from '../redux/regAuth/regActions';

const Login = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setisSubmitting] = useState(false);
  const users = useSelector((state) => state.register.users);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(setLoggedInUser(users.find((user) => user.email === values.email)));
      dispatch(setLoggedIn(true));
      setValues({
        email: '',
        password: '',
      });
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateLogin(values, users));
    setisSubmitting(true);
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
            <Form.Group className="d-flex flex-column px-0 pt-5">
              <Button
                className="btn-flat py-3  text-center rounded-0 border-0"
                type="submit"
              >
                Login
              </Button>
            </Form.Group>
          </Form.Group>
        </Form>

      </Row>
    </Layout>
  );
};

export default Login;

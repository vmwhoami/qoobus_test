const validateLogin = (values) => {
  const errors = {};
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!re.test(values.email)) {
    errors.email = 'Email adress is invalid';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required';
  } else if (values.password.trim().length < 6) {
    errors.password = 'Password has to be longer than 6 characters';
  }

  return errors;
};

export default validateLogin;

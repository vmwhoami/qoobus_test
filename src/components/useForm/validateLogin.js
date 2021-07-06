const validateLogin = (values, users) => {
  const errors = {};
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const user = users.find((user) => user.email === values.email);

  const password = users.find((user) => user.password === values.password);

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!re.test(values.email)) {
    errors.email = 'Email adress is invalid';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required';
  } else if (!password) {
    errors.password = 'Incorect password please try again';
  }

  if (!user) {
    errors.email = 'Email adress is wrong or does not exist';
  }
  return errors;
};

export default validateLogin;

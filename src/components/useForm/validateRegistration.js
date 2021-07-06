const validateRegistration = (values, users) => {
  const errors = {};
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const user = users.find((user) => user.email === values.email);
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!re.test(values.email)) {
    errors.email = 'Email adress is invalid';
  } else if (user) {
    errors.email = 'Email adress is already taken';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required';
  } else if (values.password.trim().length < 6) {
    errors.password = 'Password has to be longer than 6 characters';
  }
  if (!values.passwordRepeat.trim()) {
    errors.password2 = 'Password is required';
  } else if (values.passwordRepeat.trim() !== values.password.trim()) {
    errors.passwordRepeat = 'Passwords do not match';
  }

  if (!values.firstName.trim()) {
    errors.firstName = 'First Name is required';
  } else if (values.firstName.trim() < 4) {
    errors.firstName = 'First Name has to be greater then 3 characters';
  }

  if (!values.lastName.trim()) {
    errors.lastName = 'Last Name is required';
  } else if (values.lastName.trim() < 4) {
    errors.lastName = 'Last Name has to be greater then 3 characters';
  }
  return errors;
};

export default validateRegistration;

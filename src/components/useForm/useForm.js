import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordRepeat: '',
    firstName: '',
    lastName: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    handleChange, values, errors, setErrors,
  };
};

export default useForm;

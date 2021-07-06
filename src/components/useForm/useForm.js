import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, setSubmit } from '../../redux/regAuth/regActions';

const useForm = (validate) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordRepeat: '',
    firstName: '',
    lastName: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setisSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setisSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(addUser(values));
      dispatch(setSubmit(true));
      setValues({
        email: '',
        password: '',
        passwordRepeat: '',
        firstName: '',
        lastName: '',
      });
    }
  }, [errors]);
  return {
    handleChange, values, errors, setErrors, handleSubmit,
  };
};

export default useForm;

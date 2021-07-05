import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSubmit } from '../../redux/registeReducer/regActions';

const useForm = () => {
  const dispatch = useDispatch();
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
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      dispatch(setSubmit(false));
    } else if (Object.keys(errors).length === 0 && Object.values(values)[0].length > 0) {
      dispatch(setSubmit(true));
    }
  }, [errors]);
  return {
    handleChange, values, errors, setErrors,
  };
};

export default useForm;

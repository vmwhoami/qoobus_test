import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  groupClass, inputClass, handleChange, labelClass, label, ...otherProps
}) => (
  <div className={groupClass}>

    {
      label
        ? (
          <label htmlFor={label} className={labelClass || null}>
            {label}
          </label>
        )
        : null
    }
    { /* eslint-disable-next-line  */}
    <input id={label} className={inputClass} onChange={handleChange} {...otherProps} />
  </div>
);

FormInput.defaultProps = {
  label: null,
  labelClass: null,
};
FormInput.propTypes = {
  groupClass: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  labelClass: PropTypes.string,
  label: PropTypes.string,
};

export default FormInput;

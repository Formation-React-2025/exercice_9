import React, { useState } from "react";
import PropTypes from 'prop-types';
import './InputText.css';

const InputText = ({
  label,
  name = undefined,
  value = undefined,
  onValueChange = undefined,
  error = '',
  required = false,
  disabled = false,
}) => {
  const [
    focus,
    setFocus,
  ] = useState(false);

  return (
    <div className={`input-text ${value?.length > 0 || focus ? 'input-text-focused' : ''} ${error?.length > 0 ? 'error' : ''}`}>
      <fieldset>
        <legend className={required ? 'legend-required' : ''}>{label}</legend>
        <input
          type="text"
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          autoComplete="off"
          onFocus={() => setFocus(true)}
          onBlur={()=> setFocus(false)}
          onInput={(event) => onValueChange?.(event?.target?.value ?? '')}
        />
      </fieldset>

      {error?.length > 0 && (
        <i className="error-info">{error}</i>
      )}
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export default InputText;

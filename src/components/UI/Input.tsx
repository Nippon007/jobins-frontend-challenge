import React, { ReactElement } from 'react';

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  errorMessage?: string;
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
}

const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  errorMessage,
  id,
  rightIcon,
  leftIcon,
}: IInput) => {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && <span className="form-icon pr-2 left-2">{leftIcon}</span>}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={` ${
            errorMessage
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300'
          }  focus:outline-none 
          ${leftIcon && 'pl-8'}
          `}
        />
        {rightIcon && (
          <span className="form-icon pl-2 right-2">{rightIcon}</span>
        )}
      </div>

      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </>
  );
};

export default Input;

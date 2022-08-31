/* eslint-disable jsx-a11y/label-has-for */
import { InputHTMLAttributes, useState } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { InputContainer } from './style';

interface Ioption {
  value: string;
  text: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  borderColor?: string;
  password?: boolean;
  select?: boolean;
  optionsList?: Ioption[];
  setValue?: UseFormSetValue<FieldValues>;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  error,
  borderColor,
  register,
  password = false,
  select = false,
  optionsList,
  setValue,
  ...rest
}) => {
  const openEye = <FontAwesomeIcon icon={faEye} />;
  const slashEye = <FontAwesomeIcon icon={faEyeSlash} />;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const conditionalRender = () => {
    if (password) {
      return (
        <div>
          <input
            placeholder={placeholder}
            type={passwordShown ? 'text' : 'password'}
            {...register(name)}
            {...rest}
          />
          <button type='button' onClick={togglePasswordVisiblity}>
            <i>{passwordShown ? openEye : slashEye}</i>
          </button>
        </div>
      );
    }
    if (select) {
      return (
        <div>
          <select
            {...register(name)}
            onChange={(event) =>
              setValue &&
              setValue(name, event.target.value, {
                shouldValidate: true,
              })
            }
          >
            <option value='' selected disabled hidden>
              Selecione uma opção
            </option>
            {optionsList?.map((option) => (
              <option value={option.value}>{option.text}</option>
            ))}
          </select>
        </div>
      );
    }
    return <input placeholder={placeholder} {...register(name)} {...rest} />;
  };

  return (
    <InputContainer borderColor={borderColor}>
      <label>{label}</label>
      {conditionalRender()}
      {!!error && <span>{typeof error === 'string' && error}</span>}
    </InputContainer>
  );
};

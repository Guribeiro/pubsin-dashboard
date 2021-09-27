import React, {
  InputHTMLAttributes,
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputPassword = ({
  name,
  icon: Icon,
  ...rest
}: InputProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { registerField, fieldName, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handlePasswordVisibility = useCallback(() => {
    setPasswordIsVisible(prev => !prev);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && (
        <Icon size={18} color={isFocused || isFilled ? '#FFA027' : '#FFFFFF'} />
      )}
      <input
        ref={inputRef}
        name={name}
        type={passwordIsVisible ? 'text' : 'password'}
        defaultValue={defaultValue}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest}
      />
      <button type="button" onClick={handlePasswordVisibility}>
        {passwordIsVisible ? (
          <FiEyeOff size={18} color="#FFFFFF" />
        ) : (
          <FiEye size={18} color="#FFFFFF" />
        )}
      </button>
    </Container>
  );
};

export default InputPassword;

import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input = ({ name, icon: Icon, ...rest }: InputProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  console.log({ error });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

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
        defaultValue={defaultValue}
        ref={inputRef}
        name={name}
        type="text"
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Container>
  );
};
export default Input;

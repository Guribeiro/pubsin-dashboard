import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../../../utils/getValidationErrors';
import InputPassword from '../../components/InputPassword';
import Button from '../../components/Button';
import Input from '../../components/Input';

import LogoImage from '../../../../assets/logo-signin.png';
import { Container, Content, FormSignIn } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn = (): JSX.Element => {
  const formRef = useRef<FormHandles>(null);
  const { push, goBack } = useHistory();

  const handleSubmit = useCallback(
    async ({ email, password }: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('email é um campo obrigatório')
            .email('Digite um email válido'),
          password: Yup.string()
            .min(6, 'Mínimo de 06 caracteres')
            .required('senha é um campo obrigatório'),
        });

        await schema.validate(
          {
            email,
            password,
          },
          {
            abortEarly: true,
          },
        );

        push('/dashboard');
      } catch (error) {
        console.log(error.message);
        if (error instanceof Yup.ValidationError) {
          const erros = getValidationErrors(error);
          formRef.current?.setErrors(erros);
        }
      }
    },
    [push],
  );

  return (
    <Container>
      <header>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={26} color="#FFFFFF" />
        </button>
      </header>
      <Content>
        <img src={LogoImage} alt="pubs in logo" />
        <FormSignIn ref={formRef} onSubmit={handleSubmit}>
          <h3>Faça seu login</h3>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <InputPassword name="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Entrar</Button>
        </FormSignIn>
        <Link to="/forgot-password">Esqueci minha senha</Link>
      </Content>
    </Container>
  );
};

export default SignIn;

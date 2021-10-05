import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import Button from '@/shared/Button';
import getValidationErrors from '@/utils/getValidationErrors';
import InputPassword from '@/modules/authentication/components/InputPassword';
import Input from '@/modules/authentication/components/Input';

import LogoImage from '@/assets/logo-signin.png';
import { Container, Content, FormSignIn } from './styles';

interface SignInFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const SignUp = (): JSX.Element => {
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

        alert({ email, password });

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
          <h3>Faça seu cadastro</h3>
          <section>
            <Input name="name" icon={FiUser} placeholder="Nome Completo" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
          </section>
          <InputPassword name="password" icon={FiLock} placeholder="Senha" />
          <InputPassword
            name="password_confirmation"
            icon={FiLock}
            placeholder="Confirmar Senha"
          />
          <Button type="submit">Entrar</Button>
        </FormSignIn>
        <Link to="/forgot-password">Esqueci minha senha</Link>
      </Content>
    </Container>
  );
};

export default SignUp;

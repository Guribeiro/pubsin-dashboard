import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { FiMail, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import LogoImage from '../../../../assets/logo-signin.png';
import { Container, Content, FormSignIn } from './styles';

interface SignInFormData {
  email: string;
}

const ForgotPassword = (): JSX.Element => {
  const formRef = useRef<FormHandles>(null);
  const { push, goBack } = useHistory();

  const handleSubmit = useCallback(
    async ({ email }: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('email é um campo obrigatório')
            .email('Digite um email válido'),
        });

        await schema.validate(
          {
            email,
          },
          {
            abortEarly: true,
          },
        );

        console.log(email);

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
          <h3>Recuperar acesso</h3>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Button type="submit">Enviar</Button>
        </FormSignIn>
      </Content>
    </Container>
  );
};

export default ForgotPassword;

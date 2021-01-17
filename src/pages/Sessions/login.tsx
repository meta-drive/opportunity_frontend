import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import { Form, FormContainer } from '../../styles/global';
import { LoginContainer, ActionButton } from './styles';

interface FormFields {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { signIn } = useAuth();

  const handleLogin: SubmitHandler<FormFields> = async (credentials) => {
    if (await signIn(credentials))
      history.push('homepage');
  }

  return (
    <LoginContainer>
      <FormContainer>
        <h2>Entrar</h2>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <input ref={register} name="email" placeholder="Digite seu e-mail" type="email" />
          <input ref={register} name="password" placeholder="Digite sua senha" type="password" />

          <button type="submit" className="btn-primary">Entrar</button>
        </Form>
      </FormContainer>
      <ActionButton to="/cadastro">Cadastre-se</ActionButton>
    </LoginContainer>
  );
}

export default Login;

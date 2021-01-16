import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/AutContext';

import { Form } from './styles';

interface FormFields {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { signIn, user } = useContext(AuthContext);

  const handleLogin: SubmitHandler<FormFields> = async (credentials) => {
    if (await signIn(credentials))
      history.push('home');
  }

  return (
    <>
      <h1>Entrar</h1>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <input ref={register} name="email" placeholder="Digite seu e-mail" type="email" />
        <input ref={register} name="password" placeholder="Digite sua senha" type="password" />

        <button type='submit'>Entrar</button>
      </Form>
    </>
  );
}

export default Login;

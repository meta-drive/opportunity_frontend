import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Form } from './styles';

interface FormFields {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin: SubmitHandler<FormFields> = (data) => {
    console.log(data);
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

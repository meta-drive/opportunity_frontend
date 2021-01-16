import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import { Link, useHistory } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';

import { Form } from './styles';

import api from '../../../services/api';

interface User {
  username: string;
  email: string;
  password: string;
  birth_date: string;
  description: string;
  phone: string;
  genre: string;
  marital_status: string;
}

const CreateUser: React.FC = () => {
  const { register, control, handleSubmit } = useForm();
  const history = useHistory();

  const handleSignup: SubmitHandler<User> = async (data) => {
    try {
      const response = await api.post('users', data);
      
      alert('Cadastro realizado com sucesso');
      history.push('/login');
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <h1>Cadastre-se</h1>
      <Form onSubmit={handleSubmit(handleSignup)}>
        <input
          name="username"
          ref={register}
          placeholder="Nome Completo"
        />
        <input
          name="email"
          type="email"
          ref={register}
          placeholder="Digite o seuinput e-mail"
        />
        <Controller
          name="birth_date"
          control={control}
          render={({ onChange, value }) => (
            <ReactDatePicker 
              selected={value}
              onChange={onChange}
            />
          )}
        />
        <input
          name="phone"
          ref={register}
          placeholder="Telefone"
        />
        <input
          name="genre"
          ref={register}
          placeholder="Informe seu gênero"
        />
        <input
          name="marital_status"
          ref={register}
          placeholder="Informe seu status civil"
        />
        <textarea
          name="description"
          ref={register}
          placeholder="Nos fale sobre você"
        />
        <input
          name="password"
          type="password"
          ref={register}
          placeholder="Digite sua senha"
        />

        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/login">Voltar para o login</Link>
    </>
  );
}

export default CreateUser;

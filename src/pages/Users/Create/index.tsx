import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import ReactDatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';

import { Form, FormContainer } from '../../../styles/global';

import api from '../../../services/api';

registerLocale('pt-BR', ptBR);

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
      await api.post('users', data);
      
      alert('Cadastro realizado com sucesso');
      history.push('/login');
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <FormContainer>
      <h2>Cadastre-se</h2>
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
          placeholder="Digite o seu e-mail"
        />
        <Controller
          name="birth_date"
          control={control}
          render={({ onChange, value }) => (
            <ReactDatePicker 
              selected={value}
              onChange={onChange}
              locale='pt-BR'
              dateFormat='dd/MM/yyyy'
              placeholderText='Data de Nascimento'
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

        <button type="submit" className="btn-primary">Cadastrar</button>
      </Form>
      <Link to="/login">Voltar para o login</Link>
    </FormContainer>
  );
}

export default CreateUser;

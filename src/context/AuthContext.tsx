import React, { createContext, useState , useCallback, useContext } from 'react';

import api from '../services/api';

interface User {
  id: Number,
  username: string,
  birth_date: string,
  description: string,
  email: string,
  facebook?: string,
  genre: string,
  goals?: string,
  instagram?: string,
  linkedin?: string,
  marital_status: string,
  phone: string,
  photo?: string,
  professional_resume?: string,
  url?: string,
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
  token: String;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@opportunity:token');
    const user  = localStorage.getItem('@opportunity:user');

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) =>  {
    try {
      const response = await api.post('session', {
        email,
        password
      });

      const { token, user} = response.data;

      localStorage.setItem('@opportunity:token', token.token);
      localStorage.setItem('@opportunity:user', JSON.stringify(user));

      setData({ token, user });
      return true;
    } catch (err) {
      alert(err);
      return false;
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@opportunity:token');
    localStorage.removeItem('@opportunity:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, token: data.token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context)
    throw Error('useAuth deve estar dentro de um AuthProvider');

  return context;
}
import React, { createContext, useState , useCallback} from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
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
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

import React from 'react';
import Routes from './routes/index';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <AuthProvider>
    <Routes />
    <GlobalStyle />
    <ToastContainer autoClose={2000}/>
  </AuthProvider>
);

export default App;

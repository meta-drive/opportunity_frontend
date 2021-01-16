import React from 'react';
import Routes from './routes/index';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <AuthProvider>
    <Routes />
    <GlobalStyle />
  </AuthProvider>
);

export default App;

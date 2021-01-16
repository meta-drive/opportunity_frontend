import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../pages/Landing/index';
import Home from '../pages/Home/index';

import Login from '../pages/Sessions/login'
import CreateUser from '../pages/Users/Create/index';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact   component={Landing} />
    <Route path="/homepage" component={Home} />
    <Route path="/login"    component={Login} />
    <Route path="/cadastro" component={CreateUser} />
  </BrowserRouter>
);

export default Routes;

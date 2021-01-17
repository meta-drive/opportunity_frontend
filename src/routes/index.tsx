import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';
import Route from './Route';

import Landing from '../pages/Landing/index';
import Profile from '../pages/Profile/index';
import Home from '../pages/Home/index';

import Login from '../pages/Sessions/login'
import CreateUser from '../pages/Users/Create/index';

import Navbar from '../components/Navbar';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact   component={Landing} />
      <Route path="/login"    component={Login} />
      <Route path="/cadastro" component={CreateUser} />
      <Route path="/perfil"   component={Profile} isPrivate />
      <Route path="/home"     component={Home} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;

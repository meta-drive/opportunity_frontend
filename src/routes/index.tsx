import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';
import Route from './Route';

import Landing from '../pages/Landing/index';
import Profile from '../pages/Profile/index';

import Login from '../pages/Sessions/login'
import CreateUser from '../pages/Users/Create/index';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact   component={Landing} />
      <Route path="/login"    component={Login} />
      <Route path="/cadastro" component={CreateUser} />
      <Route path="/perfil" component={Profile} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;

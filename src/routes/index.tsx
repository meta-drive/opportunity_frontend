import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../pages/Landing/index';
import Home from '../pages/Home/index';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact   component={Landing} />
    <Route path="/homepage" component={Home} />
  </BrowserRouter>
);

export default Routes;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Vehicles } from './pages';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Vehicles" component={Vehicles} /> 
    </Switch>
  </BrowserRouter>
);
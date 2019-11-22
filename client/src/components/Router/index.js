import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={TodoListPage} />
    </Switch>
  </BrowserRouter>
);

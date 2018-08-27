import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';

import SearchAccount from '../SearchAccount/index'

const hist = createBrowserHistory();

export default function App() {
  return (
    <Router history={hist}>
      <Switch>
          <SearchAccount/>        
      </Switch>
    </Router>
  );
}
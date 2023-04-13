import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Signin from './components/auth/Signin';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/auth/signin" component={Signin} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

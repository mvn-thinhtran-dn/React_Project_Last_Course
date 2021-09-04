import React from 'react';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';

const Auth = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default Auth;

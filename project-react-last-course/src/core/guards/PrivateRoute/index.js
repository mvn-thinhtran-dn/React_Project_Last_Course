import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
  const auth = useAuth();
  return (
    <Route {...rest} render={() => auth.isLogged ? (children) : (<Redirect to="/auth/login" />)} />
  );
}

export default PrivateRoute;

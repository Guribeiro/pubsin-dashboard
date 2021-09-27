import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import ForgotPassword from '../pages/forgot-password';
import Welcome from '../pages/welcome';

const AuthenticationRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
    </Switch>
  );
};

export default AuthenticationRoutes;

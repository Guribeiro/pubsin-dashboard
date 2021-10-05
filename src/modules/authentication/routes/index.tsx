import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '@/shared/NotFound';
import SignIn from '@/modules/authentication/pages/signin';
import SignUp from '@/modules/authentication/pages/signup';
import ForgotPassword from '@/modules/authentication/pages/forgot-password';
import Welcome from '@/modules/authentication/pages/welcome';

const AuthenticationRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="*" component={() => <NotFound />} />
    </Switch>
  );
};

export default AuthenticationRoutes;

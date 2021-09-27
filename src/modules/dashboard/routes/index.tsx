import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/dashboard';

const DashboardRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default DashboardRoutes;

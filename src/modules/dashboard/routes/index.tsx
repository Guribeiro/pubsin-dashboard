import React from 'react';
import { Switch } from 'react-router-dom';
import NotFound from '@/shared/NotFound';
import Route from './Route';

import Dashboard from '../pages/dashboard';

const DashboardRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route
        exact
        path="*"
        component={() => <NotFound isPrivate />}
        isPrivate
      />
    </Switch>
  );
};

export default DashboardRoutes;

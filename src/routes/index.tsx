import React from 'react';
import AuthenticationRoutes from '../modules/authentication/routes';
import DashboardRoutes from '../modules/dashboard/routes';

const Routes = (): JSX.Element => {
  return (
    <div>
      <AuthenticationRoutes />
      <DashboardRoutes />
    </div>
  );
};

export default Routes;

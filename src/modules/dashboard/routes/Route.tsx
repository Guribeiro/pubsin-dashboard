import React from 'react';
import { Route as ReactDOMRoute, RouteProps, Redirect } from 'react-router-dom';

interface RouteDOMProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteDOMProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const user = false;
  return (
    <ReactDOMRoute
      {...rest}
      render={location =>
        isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: location.location,
            }}
          />
        )
      }
    />
  );
};

export default Route;

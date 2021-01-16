import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate ?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  console.log(user);

  return (
    <ReactDOMRoute
      { ...rest }
      render={({ location }) => {
        return ((isPrivate && !user)) ? (
          <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }} />
        ) : (
          <Component />
        );
      }}
    />
  );
}

export default Route;

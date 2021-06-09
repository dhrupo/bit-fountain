import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }:any) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionStorage.getItem('token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
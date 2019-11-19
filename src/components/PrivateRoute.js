import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "./helpers/fakeAuth";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
               // sementara akses home ("/") kalau sudah ada login page buat jadi ("/login")
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

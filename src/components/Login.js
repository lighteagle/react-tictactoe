import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from "./helpers/fakeAuth";

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <span className="menu-click" onClick={login}>
      {!fakeAuth.isAuthenticated && "Log in"}
    </span>
  );
}

export default LoginPage;

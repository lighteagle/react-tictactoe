import React from "react";
import { useHistory } from "react-router-dom";
import { fakeAuth } from "./helpers/fakeAuth";

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <span>
      Welcome, Guest!{" "}
      <span
        className="menu-click"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </span>
    </span>
  ) : (
    " "
  );
}

export default AuthButton;

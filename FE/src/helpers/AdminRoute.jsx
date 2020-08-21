import React from "react";
import { Route, Redirect } from "react-router-dom";

function AdminRoute({ path, component }) {
  return (
    <div>
      <>
        {localStorage.getItem("role") === "admin" ? (
          <Route path={path} component={component} />
        ) : (
          <Redirect to="/" />
        )}
      </>
    </div>
  );
}

export default AdminRoute;

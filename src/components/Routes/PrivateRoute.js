import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, isAuth, ...rest }) => {
  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      path={path}
      render={(props) => (
        <Component
          //inside props react-router-dom stuff
          {...props}
          //inside rest any props passed like the name that we passed to admin
          {...rest}
        />
      )}
    />
  );
};

export default PrivateRoute;

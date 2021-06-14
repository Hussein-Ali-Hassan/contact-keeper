import React, { useContext } from "react";
import { Route } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import Welcome from "../../pages/Welcome";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? <Welcome /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;

import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";

const RegisterForm = ({ history }) => {
  const { alerts, setAlert, removeAlert } = useContext(AlertContext);
  const { loginUser, error, clearErrors, isAuthenticated } =
    useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) history.push("/");

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isAuthenticated, history]);

  const { email, password } = user;

  const onChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
    if (alerts.length > 0) alerts.forEach((alert) => removeAlert(alert.id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary btn-block" />
      </form>
    </div>
  );
};

export default RegisterForm;

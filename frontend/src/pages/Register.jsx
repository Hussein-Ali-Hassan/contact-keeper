import React, { useState, useContext, useEffect } from "react";

import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";

const RegisterForm = ({ history }) => {
  const { alerts, setAlert, removeAlert } = useContext(AlertContext);
  const { registerUser, error, clearErrors, isAuthenticated } =
    useContext(AuthContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    if (isAuthenticated) history.push("/");

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isAuthenticated, history]);

  const { name, email, password, password2 } = user;

  const onChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
    if (alerts.length > 0) alerts.forEach((alert) => removeAlert(alert.id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) setAlert("Password do not match", "danger");
    else {
      registerUser({ name, email, password });
      setUser({ name: "", email: "", password: "", password2: "" });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter an email"
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
            placeholder="Enter a password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default RegisterForm;

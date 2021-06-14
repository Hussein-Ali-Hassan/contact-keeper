import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./components/layout/Nav";
import Alerts from "./components/layout/Alert";

import PrivateRoute from "./components/routing/privateRoute";
import setAuthToken from "./utils/setAuthToken";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

if (localStorage.token) setAuthToken(localStorage.token);

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <>
            <Nav />
            <div className="container">
              <Alerts />
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/about" exact component={About} />
                <PrivateRoute path="/" exact component={Home} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;

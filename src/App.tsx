import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actions } from './reducer/actions';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings";

interface IProps {
  tryToAuth(): void;
  logout(): void;
  user: {[key: string]: any}
}

function App(props: IProps) {
  const { tryToAuth, user, logout } = props;

  useEffect(() => {
    tryToAuth();
  }, []);

  const routes = user ? (
    <>
      <NavLink activeClassName="selected" className="nav-link" to="/settings">Settings</NavLink>
      <NavLink activeClassName="selected" className="nav-link" to="/">Dashboard</NavLink>
      <Switch>
        <Route path="/settings" component={Settings}></Route>
        <Route path="/" exact component={Dashboard}></Route>
        <Redirect to="/" />
      </Switch>
      <button className="logout" onClick={logout}>Logout</button>
    </>
  ) : (
    <Switch>
      <Route path="/auth" component={Auth}></Route>
      <Redirect to="/auth" />
    </Switch>
  );

  return (
    <div className="App">
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}
export default connect((appState: any) => ({
  user: appState.global.user
}),{
  tryToAuth: actions.tryToAuth,
  logout: actions.logout
})(App);

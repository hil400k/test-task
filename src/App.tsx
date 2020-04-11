import React, { useEffect, useState } from 'react';
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
  const [ authAtempt, setAuthAtempt ] = useState<boolean>(false);

  useEffect(() => {
    tryToAuth();
    setAuthAtempt(true);
  }, []);

  const routes = user ? (
    <>
      <NavLink activeClassName="selected" className="nav-link" to="/settings">Settings</NavLink>
      <NavLink activeClassName="selected" exact className="nav-link" to="/">Dashboard</NavLink>
      <div className="content">
        <Switch>
          <Route path="/settings" component={Settings}></Route>
          <Route path="/" exact component={Dashboard}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <button className="logout" onClick={logout}>Logout</button>
    </>
  ) : (
    <div className="content">
      <Switch>
        <Route path="/auth" component={Auth}></Route>
        {authAtempt && <Redirect to="/auth" />}
      </Switch>
    </div>
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

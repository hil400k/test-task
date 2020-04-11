import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actions } from './reducer/actions';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings";

interface IProps {
  text: string;
  fetchText(): void;
  tryToAuth(): void;
  logout(): void;
  user: {[key: string]: any}
}

function App(props: IProps) {
  const { text, fetchText, tryToAuth, user, logout } = props;

  useEffect(() => {
    tryToAuth();
    fetchText();
  }, []);

  const routes = user ? (
    <>
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
      {text}
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}
export default connect((appState: any) => ({
  text: appState.global.text,
  user: appState.global.user
}),{
  fetchText: actions.fetchText,
  tryToAuth: actions.tryToAuth,
  logout: actions.logout
})(App);

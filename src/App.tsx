import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actions } from './reducer/actions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import Settings from "./components/settings";

function App(props: any) {
  const { text } = props;

  useEffect(() => {
    props.fetchText();
  }, [])

  const routes = true ? (
    <Switch>
      <Route path="/auth" component={Auth}></Route>
      <Route path="/settings" component={Settings}></Route>
      <Route path="/" component={Dashboard}></Route>
    </Switch>
  ) : (
    <Switch>
      <Route path="/auth" component={Auth}></Route>
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
  text: appState.global.items
}),{
  fetchText: actions.fetchText
})(App);

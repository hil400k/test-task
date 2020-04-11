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
}

function App(props: IProps) {
  const { text } = props;

  useEffect(() => {
    props.fetchText();
  }, [])

  const routes = false ? (
    <Switch>
      <Route path="/auth" component={Auth}></Route>
      <Route path="/settings" component={Settings}></Route>
      <Route path="/" exact component={Dashboard}></Route>
      <Redirect to="/" />
    </Switch>
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
  text: appState.global.items
}),{
  fetchText: actions.fetchText
})(App);

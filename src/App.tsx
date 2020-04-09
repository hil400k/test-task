import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actions } from './reducer/actions';

function App(props: any) {
  const { text } = props;

  useEffect(() => {
    props.fetchText();
  }, []);

  return (
    <div className="App">
      {text}
    </div>
  );
}
export default connect((appState: any) => ({
  text: appState.global.items
}),{
  fetchText: actions.fetchText
})(App);

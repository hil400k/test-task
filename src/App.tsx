import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actions } from './reducer/actions';

function App(props: any) {
  useEffect(() => {
    props.fetchItems();
  }, [])
    console.info(props.items);
  return (
    <div className="App">

    </div>
  );
}
export default connect((appState: any) => ({
  items: appState.global.items
}),{
  fetchItems: actions.fetchItems
})(App);

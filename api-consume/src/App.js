import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { connect } from "react-redux";

import { apiAppReducer } from "./reducers/apiAppReducer";

//import actions when ready
import { getApiAppActions } from "./actions/apiAppActions";


import { Map } from "./components/Map";


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={props.getApiAppActions}>Show API Data</button>
        <div className="flexBox">
          <Map pricePair={props.pricePair} />
        </div>






        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//export default App;

const mapStateToProps = state => {
  //console.log(state);
  return {
    pricePair: state.pricePair,
  }; // thesese are the props, like with Formik must manulay list
};

export default connect(
  mapStateToProps,
  { getApiAppActions } // add action funtions here
)(App);

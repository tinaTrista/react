import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Head from "./components/head/Index"
import TabTop from "./components/head/Index"
import BottomBar from "./components/bottom/Index"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;

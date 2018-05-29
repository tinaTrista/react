import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import BottomBar from "./components/bottom/Index"


class App extends Component {
  render() {
    return (
      <div className="App">    
        <div className="content">{this.props.children}</div>
        <BottomBar/>
      </div>
    );
  }
}

export default App;

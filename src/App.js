import React, { Component } from 'react';
import Feed from './components/Feed/Feed';
import InputMsg from './components/InputMsg/InputMsg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Feed />
        <InputMsg />
      </div>
    );
  }
}

export default App;

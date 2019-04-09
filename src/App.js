import React, { Component } from 'react';
import Feed from './components/Feed/Feed';
import InputMsg from './components/InputMsg/InputMsg';
import Logo from './components/Logo/Logo';
import UsersBox from './components/UsersBox/UsersBox';
import Parameters from './components/Parameters/Parameters';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Feed />
        <InputMsg />
        <Logo />
        <UsersBox />
        <Parameters />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderComponents from "./Components/HeaderComponents/HeaderComponents";
import NavigationComponents from "./Components/NavigationComponents/NavigationComponents"
import BodyComponents from './Components/BodyComponents/BodyComponents';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponents />
        <NavigationComponents />
        <BodyComponents />
      </div>
    );
  }
}

export default App;

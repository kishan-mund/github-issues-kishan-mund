import React, { Component } from 'react';
import './App.css';
import HeaderComponents from "./Components/HeaderComponents/HeaderComponents";
import NavigationComponents from "./Components/NavigationComponents/NavigationComponents"
import BodyComponents from './Components/BodyComponents/BodyComponents';
import FooterComponents from './Components/FooterComponents/FooterComponents'
import SearchComponents from './Components/SearchComponent/SearchComponents'


class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponents />
        <NavigationComponents />
        <SearchComponents />
        <BodyComponents />
        <FooterComponents />
      </div>
    );
  }
}

export default App;

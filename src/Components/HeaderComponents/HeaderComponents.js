import React from "react";
import './Header.css';
import logo from "../HeaderComponents/logo.png"

const HeaderComponents = (props) => {
    return <div >
        <header >
            <img className="logo" alt="logo" src={logo}></img>
        </header>
    </div >
};

export default HeaderComponents;
import React from "react";
import './Footer.css';
import logo from "../HeaderComponents/logo.png"

const FooterComponents = (props) => {
    return <div >
        <footer >
            <img className="logo" alt="logo" src={logo}></img>
            <span className="copyright">copyright@github.com</span>
        </footer>
    </div >
};

export default FooterComponents;
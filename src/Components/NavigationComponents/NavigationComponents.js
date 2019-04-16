import React from "react";
import './Navigation.css';
import Icon from '@material-ui/core/Icon';

const NavigationComponents = (props) => {
    return <div className="navigation-box">
        <div className="navigation-box-div">
            <Icon >all_inbox</Icon>
            <a className="navigation-box-item" href="http://google.com">freeCodeCamp</a>
            <span className="navigation-box-item">/</span>
            <a className="navigation-box-item" href="http://google.com"><strong>   freeCodeCamp</strong></a>
        </div>
        <div className="navigation-issue-div">
            <div className="navigation-bar">
                <Icon >error_outline</Icon>
                <div className="navigation-box-item">issues</div>
                <span className="issue-length">{props.data.length}</span>
            </div>
        </div>
    </div >
};

export default NavigationComponents;
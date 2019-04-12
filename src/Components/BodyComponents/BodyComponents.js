import React from "react";
import './Body.css';
import Icon from '@material-ui/core/Icon';
let data = require("../../issues.json");

const BodyComponents = (props) => {
    return <div >{
        data.map((props) => {
            return <div className="issue-box" >
                <Icon className="icon" >error_outline</Icon>
                <div className="issue-details">
                    <div className="issue-title-box">
                        <div className="issue-title">{props.title}</div>
                    </div>
                    <div>
                        <span>#{props.number}&#09;</span>
                        <span>by &#09;{props.user.login}</span>
                    </div>
                </div>
                <Icon className="chat-icon">chat_bubble_outline</Icon>
            </div>
        })
    }
    </div >
};

export default BodyComponents;
import React from "react";
import './Body.css';
import LabelComponents from "../LabelComponent/LabelComponent"
import Icon from '@material-ui/core/Icon';
import moment from "moment";
import { Link } from 'react-router-dom';

const BodyComponents = (props) => {
    return <div >{
        props.data.map((props, e) => {
            return <div className="issue-box" key={e}>
                <Icon className="icon" >error_outline</Icon>
                <div className="issue-details">
                    <div className="issue-title-box">
                        <div className="issue-title">
                            <Link to={`/issues/${props.number}`} >
                                {props.title}
                            </Link>
                        </div>
                        <LabelComponents lbl={props.labels}></LabelComponents>
                    </div>
                    <div>
                        <span>#{props.number}&#09;</span>
                        <span>by &#09;{props.user.login}</span>
                        <span>&#09;created &#09;{moment(new Date(props.created_at)).fromNow()}</span>
                        <span>&#09;updated &#09;{moment(new Date(props.updated_at)).fromNow()}</span>
                    </div>
                </div>
                <Icon className="chat-icon">chat_bubble_outline &#09;</Icon>
                <span className="chat-label">{props.comments}</span>
            </div>
        })
    }
    </div >
};

export default BodyComponents;
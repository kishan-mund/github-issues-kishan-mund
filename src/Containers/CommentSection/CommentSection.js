import React, { Component } from "react";
import NavigationComponents from "../../Components/NavigationComponents/NavigationComponents"
import './Comment.css';
import moment from "moment";
import ReactMarkdown from 'react-markdown';
import Comments from "../Comments/Comments"



class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: null
        };
    }

    render() {
        console.log(this.state.comments)

        return (<div>
            {
                < div className="issue-container" >
                    <NavigationComponents data="30" />
                    <span className="title" ><strong className="title-name">{this.props.data.title} </strong> #{this.props.data.number}</span>
                    <span className="title-author">{this.props.data.user.login}</span>
                    <span className="title-time">&#09;opened this issue &#09;{moment(new Date(this.props.data.created_at)).fromNow()} .{this.props.data.comments} Comment</span>
                    <div className="comment-container">
                        <ReactMarkdown source={this.props.data.body} escapeHtml={false} />
                    </div>

                    <div className="comment-input">

                        <Comments id={this.props.id}></Comments>
                    </div>
                </div >
            }

        </div >)
    }


};

export default CommentSection;
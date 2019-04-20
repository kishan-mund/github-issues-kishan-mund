import React, { Component } from "react";
import NavigationComponents from "../../Components/NavigationComponents/NavigationComponents"
import './Comment.css';
import moment from "moment";
import ReactMarkdown from 'react-markdown';



class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: null
        };
    }
    componentDidMount() {
        fetch(`https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/${this.props.id}/comments`)
            .then(response => response.json())
            .then(comments =>
                this.setState({ comments: comments }));
    }
    render() {
        console.log(this.state.comments)
        if (this.state.comments === null) {
            return (
                <div>Loading</div>
            )
        }
        else {
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
                        {
                            this.state.comments.map((props, e) => {
                                return (
                                    <ReactMarkdown key={e}>{props.body}</ReactMarkdown>
                                )
                            })
                        }
                        <div className="comment-input">
                            <input type="text"></input>
                            <div className="comment-buttons">
                                <button>Comment</button>
                            </div>
                        </div>
                    </div >
                }

            </div >)
        }
    }

};

export default CommentSection;
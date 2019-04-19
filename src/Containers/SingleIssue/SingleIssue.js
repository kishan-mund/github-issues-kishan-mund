import React, { Component } from 'react';
import CommentSection from "../CommentSection/CommentSection"


class SingleIssue extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch(`https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/${this.props.match.params.issueId}`)
            .then(response => response.json())
            .then(data =>
                this.setState({ data: data }));
    }





    render() {
        if (this.state.data === null) {
            return (<div className="loader"></div>)
        }
        else {
            return (
                <div>
                    <CommentSection data={this.state.data} id={this.props.match.params.issueId} />
                </div>
            );
        }
    }
}

export default SingleIssue;
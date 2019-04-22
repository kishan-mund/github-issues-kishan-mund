import React, { Component } from "react";
import { auth, initializeApp } from "firebase";
import { Link } from "react-router-dom";

import "./auth.css"

var config = {
    apiKey: "AIzaSyBZtcZ-tavba1n0wWc5Z-vqIotqL6Kgpn4",
    authDomain: "github-issues-kishan-mund.firebaseapp.com",
    databaseURL: "https://github-issues-kishan-mund.firebaseio.com",
    projectId: "github-issues-kishan-mund",
    storageBucket: "github-issues-kishan-mund.appspot.com",
    messagingSenderId: "187750572184"
};

initializeApp(config);
const provider = new auth.GithubAuthProvider();
provider.addScope("repo");
class Firebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            isSignedIn: false,
            token: null,
            err: null
        };
    }

    signOutHandler = () => {
        auth()
            .signOut()
            .then(res => {
                console.log(res);
                this.setState({ isSignedIn: false });

                sessionStorage.removeItem("token");
                sessionStorage.removeItem("isUser");
                console.log(
                    sessionStorage.getItem("isUser"),
                    sessionStorage.getItem("token")
                );
            })
            .catch(err => {
                console.error(err.toString());
                this.setState({ err: err.message });
            });
    };

    signInHandler = () => {
        auth()
            .signInWithPopup(provider)
            .then(res => {
                sessionStorage.setItem("token", res.credential.accessToken);
                sessionStorage.setItem("isUser", true);
                console.log(
                    sessionStorage.getItem("token"),
                    sessionStorage.getItem("isUser")
                );
                this.setState({ isSignedIn: true, token: res.credential.accessToken });
            })
            .catch(err => {
                console.error(err.toString());
                this.setState({ err: err.message });
            });
    };

    render() {

        return (
            <div >
                <div className="auth-issue">GitHub Issues</div>
                <div className="auth" >
                    <Link to={`/${this.state.page}`}><button className="auth-button" onClick={this.signInHandler}>Sign In</button></Link>
                    <Link to={`/1`} >
                        Issues
                            </Link>
                    <button className="auth-button" onClick={this.signOutHandler}>Sign Out</button>
                </div>
            </div>
        );
    }
}

export default Firebase;

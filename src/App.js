import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Issues from './issues';
import Issue from './Containers/SingleIssue/SingleIssue';
import Firebase from "./Components/Firebase/auth"
import HeaderComponents from "./Components/HeaderComponents/HeaderComponents";
import FooterComponents from './Components/FooterComponents/FooterComponents';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <HeaderComponents />
                <Switch>
                    <Route path='/' component={Firebase} exact />
                    <Route path='/:page' component={Issues} exact />
                    <Route path='/issues/:issueId' component={Issue} exact />
                </Switch>
                <FooterComponents />
            </BrowserRouter>
        )
    }
}

export default App;

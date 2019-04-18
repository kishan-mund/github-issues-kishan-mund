import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Issues from './issues';
import Issue from './Containers/SingleIssue/SingleIssue';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Issues} exact />
                    <Route path='/issues/:issueId' component={Issue} exact />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;

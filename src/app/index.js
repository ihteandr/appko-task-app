import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { requireAuth } from './containers';
import LoginPage from './scenes/login';
import RegisterPage from './scenes/register';
import MainPage from './scenes/main';

class App extends Component {
    render() {
        return (<div className="root_container">
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app" />} />
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route path="/app" component={requireAuth(MainPage)}/>
            </Switch>
        </div>);
    }
}
export default withRouter(App);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Constants from '../../constants';
import history from '../../utils/history';
import './styles.css';

const { Locations } = Constants;

export default class LoginView extends Component {
    componentWillReceiveProps(props) {
        this.checkLogin(props);
    }
    checkLogin(props) {
        if (props.auth.isLoggedIn) {
            history.changeLocation(props.auth.enterPoint);
        }
    }
    doLogin = () => {
        this.props.actions.login(this.usernameEl.value, this.passwordEl.value);
    };
    render() {
        const { loginFailed, loginProcess, tokenError } = this.props.auth;
        return (<div className="login-page">
            <div className="login-form">
                <h3>Welcome To Appko Test App</h3>
                <div className="ap error">
                    {loginFailed ? <p> Wrong Username or Password. </p> : null}
                    {tokenError ? <p> Invalid or Expired Token. </p> : null}
                </div>
                <div className="fields">
                    <div className="field">
                        <label>Username</label>
                        <input ref={node => this.usernameEl = node} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" ref={node => this.passwordEl = node} />
                    </div>
                </div>
                <div className="login-form_actions">
                    <button disabled={loginProcess} onClick={this.doLogin}>Login</button>
                    <div className="login-form_actions_register">
                        <Link to={Locations.REGISTER}>Register</Link>
                    </div>
                </div>
            </div>
        </div>);
    }
}

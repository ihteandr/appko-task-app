import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../../utils/history';
import Constants from '../../constants';
import './styles.css';

const { Locations } = Constants;

export default class RegisterView extends Component {
    componentWillReceiveProps(props) {
        this.checkLogin(props);
    }
    checkLogin(props) {
        if (props.auth.isLoggedIn) {
            history.changeLocation(props.auth.enterPoint);
        }
    }
    register = () => {
        this.props.actions.register({
            username: this.usernameEl.value,
            password: this.passwordEl.value,
            name: this.nameEl.value,
        });
    };
    render() {
        const { registerProcess, registerErrors } = this.props.auth;
        return (<div className="register-page">
            <div className="register-form">
                <h2>
                    Register in Appko Test App or <Link to={Locations.LOGIN}>Login</Link>
                </h2>
                <div className="ap error">
                    {registerErrors.map( error => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
                <div className="fields">
                    <div className="field">
                        <label>Name</label>
                        <input ref={node => this.nameEl = node}/>
                    </div>
                    <div className="field">
                        <label>Username</label>
                        <input ref={node => this.usernameEl = node}/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" ref={node => this.passwordEl = node}/>
                    </div>
                </div>
                <div className="register-form_actions">
                    <button disabled={registerProcess} onClick={this.register}>Register</button>
                </div>
            </div>
        </div>);
    }
}

import React, { Component } from 'react';
import Constants from '../../../../constants';
import history from '../../../../utils/history';
import './styles.css';

const { Locations } = Constants;

export default class HeaderView extends Component {
    componentWillReceiveProps(props) {
        this.checkLogin(props);
    }
    checkLogin(props) {
        if (!props.auth.isLoggedIn) {
            history.changeLocation(Locations.LOGIN);
        }
    }
    doLogout = () => {
        this.props.actions.logout();
    };
    render() {
        const { userName } = this.props;
        return (<div className="page-header">
            <b>Invoices</b>
            <label>Hi {userName}!</label>
            <label className="logout"
                   onClick={this.doLogout}>logout</label>
        </div>);
    }
}

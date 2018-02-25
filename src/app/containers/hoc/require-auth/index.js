import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../../redux-store/reducers/auth/actions';
import { Storage } from '../../../services';
import history from '../../../utils/history';
import Constants from '../../../constants';

const { Locations } = Constants;

export function requireAuth(PageComponent){
    class Authentication extends Component{
        componentWillReceiveProps(props){
            this.checkAuth(props);
        }
        goLogin = () => {
            if (history.location.pathname.indexOf(Locations.LOGIN) === -1) {
                this.props.changeEnterPoint(history.location.pathname);
            }
            history.changeLocation(Locations.LOGIN);
        };
        async checkAuth(props){
            if(!props.auth.isLoggedIn && !props.auth.loginProcess && !props.auth.loginError){
                if (props.auth.tokenError) {
                    this.goLogin();
                } else {
                    const token = await Storage.get('auth_token', 'local');
                    if (token) {
                        this.props.loginWithToken(token);
                    } else {
                        this.goLogin();
                    }   
                }
            }
        }
        componentDidMount(){
            this.checkAuth(this.props);
        }
        render(){
            let content = <h1>Authorizing....</h1>;
            if(this.props.auth.token){
                content = <PageComponent {...this.props}/>;
            }
            return content;
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.auth,
        };
    }
    function bindActionsToProps(dispatch){
        return bindActionCreators(authActions, dispatch);
    }

    return connect(mapStateToProps, bindActionsToProps)(Authentication);
}
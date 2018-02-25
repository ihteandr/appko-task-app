import { connect } from 'react-redux';
import * as authActions from '../../../../redux-store/reducers/auth/actions';
import { bindActionCreators } from 'redux';

import HeaderView from './view';

function mapStateToProps(state) {
    const userName = state.auth.user.name;
    return {
        userName,
        isLoggedIn: state.auth.isLoggedIn,
    };
}

function bindActionsToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch),
    };
}

export const PageHeader = connect(mapStateToProps, bindActionsToProps)(HeaderView);
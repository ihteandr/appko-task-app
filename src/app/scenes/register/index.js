import { connect } from 'react-redux';
import * as authActions from '../../redux-store/reducers/auth/actions';
import { bindActionCreators } from 'redux';
import RegisterView from './view';

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}

function bindActionsToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch),
    };
}

export default connect(mapStateToProps, bindActionsToProps)(RegisterView);

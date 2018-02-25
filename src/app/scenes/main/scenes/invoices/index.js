import { connect } from 'react-redux';
import * as invoicesActions from '../../../../redux-store/reducers/invoices/actions';
import { bindActionCreators } from 'redux';

import InvoicesView from './view';

function mapStateToProps(state) {
    return {
        invoices: state.invoices.items,
        userId: state.auth.user.id,
        searchValue: state.invoices.searchValue,
    };
}

function bindActionsToProps(dispatch) {
    return {
        actions: bindActionCreators(invoicesActions, dispatch),
    };
}

export default connect(mapStateToProps, bindActionsToProps)(InvoicesView);
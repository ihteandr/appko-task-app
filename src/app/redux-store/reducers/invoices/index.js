
import {
    ADD_INVOICE_PROCESS,
    ADD_INVOICE_SUCCESS,
    DELETE_INVOICE_PROCESS,
    DELETE_INVOICE_SUCCESS,
    INVOICE_SEARCH_PROCESS,
    INVOICE_SEARCH_SUCCESS,
    UPDATE_INVOICE_SEARCH_VALUE,
    UPDATE_INVOICE_PROCESS,
    UPDATE_INVOICE_SUCCESS,
} from './constants';

import {
    handleAddInvoiceProcess,
    handleAddInvoiceSuccess,
    handleDeleteInvoiceProcess,
    handleDeleteInvoiceSuccess,
    handleSearchInvoicesProcess,
    handleSearchInvoicesSuccess,
    handleUpdateInvoiceSearchValue,
    handleUpdateInvoiceProcess,
    handleUpdateInvoiceSuccess,
} from './handlers';

const initialState = {
    items: [],
    selected: null,
    searchValue: '',
    searchProcess: false,
    deleteProcess: false,
    addProcess: false,
    updateProcess: false,
};

export function invoicesReducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case ADD_INVOICE_PROCESS:
            return handleAddInvoiceProcess(state);
        case ADD_INVOICE_SUCCESS:
            return handleAddInvoiceSuccess(state, payload);
        case DELETE_INVOICE_PROCESS:
            return handleDeleteInvoiceProcess(state);
        case DELETE_INVOICE_SUCCESS:
            return handleDeleteInvoiceSuccess(state, payload);
        case INVOICE_SEARCH_PROCESS:
            return handleSearchInvoicesProcess(state);
        case INVOICE_SEARCH_SUCCESS:
            return handleSearchInvoicesSuccess(state, payload);
        case UPDATE_INVOICE_SEARCH_VALUE:
            return handleUpdateInvoiceSearchValue(state, payload);
        case UPDATE_INVOICE_PROCESS:
            return handleUpdateInvoiceProcess(state);
        case UPDATE_INVOICE_SUCCESS:
            return handleUpdateInvoiceSuccess(state, payload);
        default:
            return state;
    }
};
import {
    INVOICE_SEARCH_PROCESS,
    INVOICE_SEARCH_SUCCESS,
    ADD_INVOICE_PROCESS,
    ADD_INVOICE_SUCCESS,
    DELETE_INVOICE_PROCESS,
    DELETE_INVOICE_SUCCESS,
    UPDATE_INVOICE_SEARCH_VALUE,
    UPDATE_INVOICE_PROCESS,
    UPDATE_INVOICE_SUCCESS,
} from '../constants';
import { asyncAction } from '../../../../utils/redux';
import { api } from '../../../../services';

export function searchInvoices(userId, searchValue) {
    return (dispatch) => (
        asyncAction({
            dispatch,
            type: INVOICE_SEARCH_PROCESS,
            successType: INVOICE_SEARCH_SUCCESS,
            action: async () => {
                const items = await api.invoices.searchUserInvoices(userId, searchValue);
                return items;
            },
        })
    );
}

export function changeSearchValue(value) {
    return (dispatch) => (
        dispatch({
            type: UPDATE_INVOICE_SEARCH_VALUE,
            payload: value,
        })
    );
}

export function addInvoice(userId, name) {
    return (dispatch) => (
        asyncAction({
            dispatch,
            type: ADD_INVOICE_PROCESS,
            successType: ADD_INVOICE_SUCCESS,
            action: async () => {
                const invoiceId = await api.invoices.add({ userId, name });
                return await api.invoices.get(invoiceId);
            },
        })
    );
}

export function deleteInvoice(id) {
    return (dispatch) => (
        asyncAction({
            dispatch,
            type: DELETE_INVOICE_PROCESS,
            successType: DELETE_INVOICE_SUCCESS,
            action: async () => {
                await api.invoices.remove(id);
                return id;
            },
        })
    );
}

export function updateInvoice(invoice, name) {
    return (dispatch) => (
        asyncAction({
            dispatch,
            type: UPDATE_INVOICE_PROCESS,
            successType: UPDATE_INVOICE_SUCCESS,
            action: async () => {
                await api.invoices.update({
                    ...invoice,
                    name,
                });
                return await api.invoices.get(invoice.id);
            },
        })
    );
}

export function handleSearchInvoicesProcess(state) {
    return {
        ...state,
        items: [],
        searchProcess: true,
    };
}

export function handleSearchInvoicesSuccess(state, payload) {
    return {
        ...state,
        items: payload,
        searchProcess: false,
    };
}

export function handleAddInvoiceProcess(state) {
    return {
        ...state,
        addProcess: true,
    };
}

export function handleAddInvoiceSuccess(state, payload) {
    return {
        ...state,
        items: [payload].concat(state.items),
        addProcess: false,
        searchValue: '',
    };
}

export function handleDeleteInvoiceProcess(state) {
    return {
        ...state,
        deleteProcess: true,
    };
}

export function handleDeleteInvoiceSuccess(state, payload) {
    return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
        deleteProcess: false,
    };
}

export function handleUpdateInvoiceProcess(state) {
    return {
        ...state,
        updateProcess: true,
    };
}

export function handleUpdateInvoiceSuccess(state, payload) {
    return {
        ...state,
        items: state.items.map(item => item.id !== payload.id ? item : payload),
        deleteProcess: false,
    };
}

export function handleUpdateInvoiceSearchValue(state, payload) {
    return {
        ...state,
        searchValue: payload,
    }
}

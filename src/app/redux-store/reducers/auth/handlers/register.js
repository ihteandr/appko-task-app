
export function handleRegisterProcess(state) {
    return {
        ...state,
        registerErrors: [],
        registerProcess: true,
        registerSuccess: false,
    };
}

export function handleRegisterSuccess(state) {
    return {
        ...state,
        registerSuccess: true,
        registerProcess: false,
    }
}

export function handleRegisterFailed(state, payload) {
    return {
        ...state,
        registerSuccess: false,
        registerErrors: payload,
        registerProcess: false,
    }
}
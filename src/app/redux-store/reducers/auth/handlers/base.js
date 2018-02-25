
export function handleLoginProcess(state) {
    return {
        ...state,
        user: null,
        token: null,
        tokenError: false,
        loginProcess: true,
        loginFailed: false,
        isLoggedIn: false,
    };
}

export function handleLoginSuccess(state, payload) {
    return {
        ...state,
        loginProcess: false,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
    };
}

export function handleLoginError(state) {
    return {
        ...state,
        loginProcess: false,
        loginFailed: true,
        isLoggedIn: false,
    };
}

export function handleLoginTokenError(state) {
    return {
        ...state,
        tokenError: true,
        loginProcess: false,
        loginFailed: true,
        isLoggedIn: false,
    };
}

export function handleLogoutSuccess(state) {
    return {
        ...state,
        token: null,
        user: null,
        isLoggedIn: false,
    }
}
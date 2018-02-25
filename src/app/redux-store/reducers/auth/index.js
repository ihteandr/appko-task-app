import {
    LOGIN_ERROR,
    LOGIN_PROCESS,
    LOGIN_SUCCESS,
    LOGIN_TOKEN_ERROR,
    CHANGE_ENTER_POINT,
    REGISTER_FAILED,
    REGISTER_PROCESS,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
} from './constants';

import {
    handleLoginError,
    handleLoginProcess,
    handleLoginSuccess,
    handleLoginTokenError,
    handleChangeEnterPoint,
    handleRegisterFailed,
    handleRegisterProcess,
    handleRegisterSuccess,
    handleLogoutSuccess,
} from './handlers';

const initialState = {
    loginProcess: false,
    tokenError: false,
    loginFailed: false,
    isLoggedIn: false,
    user: null,
    token: null,
    enterPoint: '/',
    registerProcess: false,
    registerSuccess: false,
    registerErrors: [],
};

export function authReducer(state = initialState, action = {}) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_ERROR:
            return handleLoginError(state);
        case LOGIN_PROCESS:
            return handleLoginProcess(state);
        case LOGIN_SUCCESS:
            return handleLoginSuccess(state, payload);
        case LOGIN_TOKEN_ERROR:
            return handleLoginTokenError(state);
        case CHANGE_ENTER_POINT:
            return handleChangeEnterPoint(state, payload);
        case REGISTER_FAILED:
            return handleRegisterFailed(state, payload);
        case REGISTER_PROCESS:
            return handleRegisterProcess(state);
        case REGISTER_SUCCESS:
            return handleRegisterSuccess(state);
        case LOGOUT_SUCCESS:
            return handleLogoutSuccess(state);
        default:
            return state;
    }
}

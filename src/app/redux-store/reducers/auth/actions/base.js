import {
    LOGIN_ERROR,
    LOGIN_PROCESS,
    LOGIN_SUCCESS,
    LOGIN_TOKEN_ERROR,
    LOGOUT_PROCESS,
    LOGOUT_SUCCESS,
} from '../constants';
import { asyncAction } from '../../../../utils/redux';
import { api, Storage } from '../../../../services';

export function login(username, password) {
    return (dispatch) => (
        asyncAction({
            dispatch,
            type: LOGIN_PROCESS,
            successType: LOGIN_SUCCESS,
            errorType: LOGIN_ERROR,
            action: async () => {
                const data = await api.users.login(username, password);
                if (!data) {
                    throw Object.create({
                        code: 1,
                        message: LOGIN_ERROR,
                    });
                }
                await Storage.add('auth_token', data.token.value, 'local');
                return data;
            },
        })
    ); 
}

export function loginWithToken(token) {
    return (dispatch) => (
        asyncAction({
            dispatch,
            successType: LOGIN_SUCCESS,
            errorType: LOGIN_TOKEN_ERROR,
            action: async () => {
                const user = await api.users.getUserByToken(token);
                return {
                    user,
                    token: { value: token }
                };
            },
        })
    );
}

export function logout() {
    return (dispatch) => {
        asyncAction({
            dispatch,
            successType: LOGOUT_SUCCESS,
            type: LOGOUT_PROCESS,
            action: async () => {
                await Storage.remove('auth_token', 'local');
            }
        })
    }
}

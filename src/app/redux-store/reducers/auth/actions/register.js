import {
    REGISTER_FAILED,
    REGISTER_PROCESS,
    REGISTER_SUCCESS,
} from '../constants';
import { login } from './base';
import { asyncAction } from '../../../../utils/redux';
import { api } from '../../../../services';


export function register(data) {
    return (dispatch) => (
        asyncAction({
            dispatch,
            type: REGISTER_PROCESS,
            successType: REGISTER_SUCCESS,
            errorType: REGISTER_FAILED,
            action: async () => {
                const errors = [];
                if (!data.username) {
                    errors.push('Username missed');
                }
                if (!data.name) {
                    errors.push('Name missed');
                }
                if (!data.password) {
                    errors.push('Password missed');
                }
                if (errors.length > 0) {
                    throw Object.create(errors);
                }
                await api.users.register(data);
                await login(data.username, data.password)(dispatch);

            }
        })
    );
}
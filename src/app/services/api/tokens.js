import BaseApi from './base';

export default class TokensApi extends BaseApi {
    validateToken(token) {
        return this.backend.users.getUserByToken(token);
    }
}

import BaseApi from './base';

export default class UsersApi extends BaseApi {
    async register(data) {
        return await this.backend.db.users.add(data);
    }
    async login(username, password) {
        const user = await this.backend.db.users.login(username, password)
        if (!user) {
           throw Object.create({
               code: 2,
               message: 'No user',
           });
        }
        const tokenId = await this.backend.db.tokens.create(user.id);
        const token = await this.backend.db.tokens.get(tokenId);
        return {
            user: user,
            token: token,
        };
    }
    getUserByToken(token) {
        return this.backend.db.users.getUserByToken(token);
    }
}
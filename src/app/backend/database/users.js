import BaseModel from './base';

export default class UsersModel extends BaseModel{
    init() {
        this.store.users.defineClass({
            id: Number,
            name: String,
            username: String,
            password: String,
            createdAt: Date,
        });
    }
    async add(data){
        const validateResult = this.validate(data, ['name', 'username', 'password']);
        if (!validateResult) {
            const user = await this.store.users.where({ username: data.username }).first();
            if (!user) {
                await this.store.users.add(data);
            } else {
                throw Object.create(['Such username exists']);
            }
        } else {
            throw Object.create(validateResult);
        }
    }
    async login(username, password) {
        return await this.store.users.where({
            username,
            password,
        }).first();
    }
    async getUserByToken(value) {
        const token = await this.db.tokens.getByValue(value);
        if (!token) {
            throw Object.create({
                code: 2,
                message: 'Invalid token',
            });
        }
        return await this.get(token.userId);
    }
    async update(user) {
        return await  this.store.users.update(user.id, user);
    }
    async get(id){
        return await this.store.users.where({ id }).first();
    }
    async remove(id){
        return await this.store.users.delete(id);
    }
}
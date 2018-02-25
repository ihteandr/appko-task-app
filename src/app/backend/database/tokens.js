import BaseModel from './base';
import * as uuid from 'uuid';

export default class TokensModel extends BaseModel{
    init() {
        this.store.tokens.defineClass({
            id: Number,
            value: String,
            userId: Number,
        });
    }
    async create(userId){
        return await this.store.tokens.add({
            userId: userId,
            value: uuid.v4(),
        });
    }
    async getByValue(value){
        return await this.store.tokens.where({ value }).first();
    }
    async get(id){
        return await this.store.tokens.where({ id }).first();
    }
    async remove(id){
        return await this.store.tokens.delete(id);
    }
}
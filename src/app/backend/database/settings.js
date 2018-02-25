import BaseModel from './base';

export default class SettingsModel extends BaseModel{
    init() {
        this.store.settings.defineClass({
            key: String,
            value: String,
        });
    }
    async create(key, value){
        return await this.store.settings.add({
            key: key,
            value: value,
        });
    }
    async get(key){
        return await this.store.settings.where({ key }).first();
    }
}
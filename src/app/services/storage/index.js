import {MemoryStorage} from './memory_storage';
import {SessionStorage} from './session_storage';
import {LocalStorage} from './local_storage';
import {LocalDBStorage} from './local_db_storage';

class StorageService {
    constructor() {
        this.store = {};
        this.store.memory = new MemoryStorage();
        this.store.local = new LocalStorage();
        this.store.session = new SessionStorage();
        this.store.localDB = new LocalDBStorage('locale-db');
    }
    add(key, data, storage, options){
        return this.store[storage].add(key, data, options);
    }
    get(key, storage, options){
        return this.store[storage].get(key, options);
    }
    remove(key, storage, options){
        return this.store[storage].remove(key, options);
    }
}

export const Storage = new StorageService();

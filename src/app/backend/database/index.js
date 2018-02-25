import Dexie from 'dexie';
import InvoicesModel from './invoices'; 
import UsersModel from './users'; 
import TokensModel from './tokens'; 
import SettingsModel from './settings'; 

class DB{
    constructor(name){
        const store = new Dexie('main-database');

        store.version(1).stores({
            invoices: "++id,name,createdAt,userId,updatedAt",
            users: "++id,name,password,&username,[username+password]",
            tokens: "++id,&value,userId",
            settings: "++id,&key,&value"
        });
        store.open();

        this.invoices = new InvoicesModel(store, this);
        this.users = new UsersModel(store, this);
        this.tokens = new TokensModel(store, this);
        this.settings = new SettingsModel(store, this);
    }
}

export default new DB();
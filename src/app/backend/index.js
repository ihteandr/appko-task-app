import DB from './database';

class Backend {
    constructor() {
        this.db = DB;
        this.db.settings.get('state').then((setting) => {
            if (!setting || setting.value !== 'initialized') {
                this.db.users.add({
                    name: 'Appko Test User',
                    username: 'test',
                    password: 'test',
                }).then(() => {
                    this.db.settings.create('state', 'initialized');
                });
            }
        })
    }
}

export default new Backend();
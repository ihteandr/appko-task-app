export default class BaseModel {
    constructor(store, db) {
        this.store = store;
        this.db = db;
        this.init();
    }
    validate(data, requiredFields) {
        const errors = [];
        for (const key in data) {
            if (requiredFields.indexOf(key) !== -1 && !data[key]) {
                errors.push({
                    code: 1,
                    message: `${key} missed`
                });
            }
        }
        return errors.length > 0 ? errors : null;
    }
    init() {
        console.warn('warning: virtual method call.')
    }
}
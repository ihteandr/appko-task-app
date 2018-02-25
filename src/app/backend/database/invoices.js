import BaseModel from './base';

export default class InvoicesModel extends BaseModel{
    init() {
        this.store.invoices.defineClass({
            id: Number,
            name: String,
            createdAt: Date,
            updatedAt: Date,
            userId: Number,
        });
    }
    async add({ name, userId }){
        return await this.store.invoices.add({
            name,
            userId,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }
    async update(invoice) {
        invoice.updatedAt = new Date();
        return await this.store.invoices.update(invoice.id, invoice);
    }
    async get(id){
        return await this.store.invoices.where({ id }).first();
    }
    async getUserInvoices(userId) {
        return await this.store.invoices.where({ userId });
    }
    async searchUserInvoices(userId, name) {
        return await this.store.invoices.where({ userId }).and((invoice) => (
            invoice.name.indexOf(name) !== -1
        )).toArray();
    } 
    async search(name) {
        return await this.store.invoices.where('name').startsWithIgnoreCase(name);
    }
    async remove(id){
        return await this.store.invoices.delete(id);
    }
}
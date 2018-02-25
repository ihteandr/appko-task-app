import BaseApi from './base';

export default class InvoicesApi extends BaseApi {
    async add(data) {
        return await this.backend.db.invoices.add(data);
    }
    async getUserInvoices(userId) {
        return await this.backend.db.invoices.getUserInvoices(userId);
    }
    async get(id) {
        return await this.backend.db.invoices.get(id);
    }
    async remove(id) {
        return await this.backend.db.invoices.remove(id);
    }
    async update(invoice) {
        return await this.backend.db.invoices.update(invoice);
    }
    async searchUserInvoices(userId, name) {
        return await this.backend.db.invoices.searchUserInvoices(userId, name);
    }
}

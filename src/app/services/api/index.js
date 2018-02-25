import InvoicesApi from './invoices';
import UsersApi from './users';
import TokensApi from './tokens';
import Backend from '../../backend';

class Api {
    constructor(backend) {
        this.users = new UsersApi(backend);
        this.invoices = new InvoicesApi(backend);
        this.tokens = new TokensApi(backend);
    }
}

export const api = new Api(Backend);

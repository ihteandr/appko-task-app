import React, { Component } from 'react';
import './styles.css';

export default class InvoicesView extends Component {

    componentDidMount() {
        this.searchInvoices(this.props.searchValue);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.searchValue !== this.props.searchValue) {
            this.searchInvoices(nextProps.searchValue );
        }
    }
    add = () => {
        this.searchEl.classList.remove('ap', 'error');
        const { searchValue, userId } = this.props;
        if (searchValue) {
            this.props.actions.addInvoice(userId, searchValue);
        } else {
            this.searchEl.classList.add('ap', 'error');
        }
    };
    delete(id) {
        this.props.actions.deleteInvoice(id);
    };
    searchInvoices(searchValue) {
        const { userId } = this.props;
        this.props.actions.searchInvoices(userId, searchValue);
    };
    updateInvoice(invoice, e) {
        this.props.actions.updateInvoice(invoice, e.target.value);
    };
    updateSearchValue = (e) => {
        this.props.actions.changeSearchValue(e.target.value);
    };
    render() {
        const {
            invoices,
            searchValue,
            addProcess,
            deleteProcess,
        } = this.props;
        return (<div className="invoices-page ap page">
            <div className="ap content">
                <div className="invoices-page_search">
                    <input value={searchValue}
                           onChange={this.updateSearchValue}
                           ref={node => this.searchEl = node} />
                    <button disabled={addProcess} onClick={this.add}>Add</button>
                </div>
                <label>{deleteProcess ? 'deleting' : ''}</label>
                <div className="invoices-page_list">
                    {invoices.map((invoice) => (
                        <div key={invoice.id} className="invoices-page_item">
                            <input value={invoice.name} onChange={(e) => this.updateInvoice(invoice, e)} />
                            <button className="ap btn-link"
                                    disabled={deleteProcess}
                                    onClick={() => this.delete(invoice.id)}>
                                delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>);
    }
}

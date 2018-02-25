import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import InvoicesPage from './scenes/invoices';
import Constants from '../../constants';
import { PageHeader } from './containers';

const { Locations } = Constants;

export default class MainView extends Component {
    render() {
        return (<div className="main-page">
            <PageHeader />
            <div className="main-page-content">
                <Switch>
                    <Route exact
                        path={Locations.APP.INVOICES}
                        component={InvoicesPage}
                    />
                    <Route exact path={Locations.APP.DEFAULT} render={() => (
                        <Redirect to={Locations.APP.INVOICES} />
                    )}
                    />
                </Switch>
            </div>
        </div>);
    }
}
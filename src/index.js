import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import store from './app/redux-store';
import { Provider } from 'react-redux';
import history from './app/utils/history';
import App from './app';
import './styles/index.css';

render((<Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
</Provider>), document.getElementById('root'));

registerServiceWorker();

window.addEventListener('unhandledrejection', (err) => {
    console.error(err);
});

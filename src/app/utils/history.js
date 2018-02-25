import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

function getSearchOptions(search: string = '') {
    const params = new URLSearchParams(search.substr(search.indexOf('?')));
    const entries = params.entries();
    const query = {};
    let item = entries.next();
    while (!item.done) {
        query[item.value[0]] = item.value[1];
        item = entries.next();
    }
    return query;
}

history.isActive = function isActive(path: string) {
    return this.location.pathname + this.location.search === path;
};

history.isActivePath = function isActivePath(path: string) {
    return this.location.pathname === path;
};

history.changeLocationQuery = function changeLocationQuery(options: Object, reset: boolean = false) {
    const search = [];
    const allOptions = Object.assign(reset ? {} : getSearchOptions(this.location.search), options);
    for (const key in allOptions) {
        if (allOptions.hasOwnProperty(key)) {
            search.push(`${key}=${allOptions[key]}`);
        }
    }
    this.changeLocation(this.location.pathname + '?' + search.join('&'));
};

history.changeLocation = function changeLocation(location) {
    if (!this.isActive(location)) {
        this.push(location);
    }
};

export default history;

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from './containers/App/App'

import configureStore from './configureStore';

import SearchAccount from './containers/SearchAccount/index'
// import ShowAccountInforForm from './components/ShowAccountInfoForm/ShowAccountInforForm'
import ShowAccountHistory from './components/ShowAccountHistory/ShowAccountHistory'

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {/* <App /> */}
            <SearchAccount/>
            {/* <ShowAccountInforForm/> */}
            {/* <ShowAccountHistory/> */}
        </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
);


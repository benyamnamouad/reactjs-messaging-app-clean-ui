import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from "./App";



const createStoreWithMiddleware = createStore(reducers,{},applyMiddleware(ReduxThunk));


export default class Index extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
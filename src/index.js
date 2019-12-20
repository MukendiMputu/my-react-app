import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let store = createStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
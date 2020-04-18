import * as serviceWorker from './serviceWorker';
import { store } from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})

serviceWorker.unregister();

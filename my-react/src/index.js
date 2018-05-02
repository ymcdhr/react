import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index'

// 构造store和reducer的关系
let store = createStore(reducers)

// 测试
store.getState();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

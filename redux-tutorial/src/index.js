import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// NOTE (1) createStore
import { createStore } from 'redux';
// NOTE (2) Provider 호출
import { Provider } from 'react-redux';
// NOTE (3) Root Reducer 호출
import rootReducer from './redux/rootReducer';

// NOTE (1-1) CreateStore
const store = createStore(rootReducer);

// NOTE (2-1) Provider
// - react app에서 store를 연동할 때, react-redux 라이브러리 안에 있는 "Proivder Component"를 사용함.
// - 기존의 JSX를 Provider로 감싸고, store는 props로 Provider 한테 넣어준다.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

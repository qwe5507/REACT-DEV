import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alert초기값 = true;

function reducer3(state = alert초기값, 액션) {
  if (액션.type === "ui닫기") {
    return false;
  }
  return state;
}

let 기본state = [
  { id: 0, name: "멋진신발", quan: 2,},
  { id: 1, name: "멋진신발2", quan: 1,},
];

function reducer(state = 기본state, 액션) {
  if (액션.type === "수량증가") {
    let copy = [...state];
    copy[0].quan += 1;
    return copy;
  } else if(액션.type === "수량감소") {
    let copy = [...state];
    copy[0].quan = copy[0].quan < 1 ? copy[0].quan : copy[0].quan - 1;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({reducer, reducer3}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

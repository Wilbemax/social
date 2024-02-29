import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
debugger
export let rerenderEntairPage = () => {
  root.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  );
};
rerenderEntairPage();
store.subscribe(() => {
  rerenderEntairPage();
});
//38

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

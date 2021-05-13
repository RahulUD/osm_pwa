import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './redux/reExport';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import Admin from './master/Admin'
import Welcome from './master/Welcome'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Welcome} />
          <Route path="/admin" component={Admin} />
          <Redirect to='/weocome' path='/' />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

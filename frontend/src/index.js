import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Employee from './admin/employee';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


  /*
   <Routes>
    <Route exact path='/' render={() => <Home/>} />
      <Route exact path='/display' render={() => <Employee />} />
      <Route path='/edit/:id' render={() => <Edit />} />
    </Routes>*/
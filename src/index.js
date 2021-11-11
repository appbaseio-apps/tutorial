import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Tutorial from './OnboardingPage';
import EndScreen from './OnboardingPage/EndScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

ReactDOM.render(  
  <Router>
    <Switch>
        <Route path="/finish" component={EndScreen}/>
        <Route path="/" component={Tutorial}/>
        {/* <Route path="/" component={App}/> */}
      </Switch>
    </Router> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext';

const Router = process.env.NODE_ENV === 'development' ? HashRouter: BrowserRouter

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

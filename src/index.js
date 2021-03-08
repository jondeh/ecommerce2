import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ScrollToTop from './Components/ScrollToTop';

const Router = process.env.NODE_ENV === 'development' ? HashRouter: BrowserRouter

const stripePromise = loadStripe('pk_test_51IR3BZL0ktef83tdhUVT5zhz12WgFrlivoBkeoRX2GoUaI3ukaSuoTovVqmDWVb8DUPY48ktFhCRpMAMyIaQw7qS00jiPJZG9R')

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Elements stripe={stripePromise}>
        <UserProvider>
          <AppProvider>
            <ScrollToTop>
              <App />
            </ScrollToTop>
          </AppProvider>
        </UserProvider>
      </Elements>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

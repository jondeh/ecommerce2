import React, { useState, useContext, useEffect } from 'react';
import './App.scss';
import routes from './routes';
import { useLocation } from 'react-router-dom';
import Header from './Components/Menus/Header';
import { AppContext } from './context/AppContext';
import MobileMenu from './Components/Menus/MobileMenu';
import Auth from './Components/Pages/Auth';
import Footer from './Components/Menus/Footer';
import FooterHeader from './Components/Menus/FooterHeader';
import EmailQuestion from './Components/Sections/EmailQuestion';
import AddOnQuestion from './Components/Sections/AddOnQuestion';

function App() {
  const location = useLocation()
  const { mobileMenuVisible, emailQuestion } = useContext(AppContext);

  const appStyle = {
    // background: location.pathname === '/customize' ? "#B0C4DE" : null
    background: location.pathname === '/customize' ? "#72A0C1" : "#B0C4DE"
  }

  return (
    <div className="App" style={appStyle}>
      <Header />
      {/* <Auth /> */}
      <MobileMenu />
      <EmailQuestion />
      <AddOnQuestion />   
      { routes }
      {(location.pathname !== '/customize') ? <Footer /> : <FooterHeader />}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

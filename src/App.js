import React, { useState, useContext, useEffect } from 'react';
import './App.scss';
import routes from './routes';
import { useLocation } from 'react-router-dom';
import Header from './Components/Menus/Header';
import { AppContext } from './context/AppContext';
import MobileMenu from './Components/Menus/MobileMenu';
import Footer from './Components/Menus/Footer';
import EmailQuestion from './Components/Sections/EmailQuestion';
import AddOnQuestion from './Components/Sections/AddOnQuestion';

function App() {
  const location = useLocation()
  const { mobileMenuVisible, emailQuestion } = useContext(AppContext);

  return (
    <div className="App">
      <Header />
      <MobileMenu />
      <EmailQuestion />
      <AddOnQuestion />   
      { routes }
      {/* {(!mobileMenuVisible && location.pathname !== '/customize') && <Footer />} */}
      <Footer />
    </div>
  );
}

export default App;

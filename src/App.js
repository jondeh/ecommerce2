import React, { useState, useContext, useEffect } from 'react';
import './App.scss';
import routes from './routes';
import Header from './Components/Menus/Header';
import { AppContext } from './context/AppContext';
import MobileMenu from './Components/Menus/MobileMenu';

function App() {

  // const { mobileMenuVisible } = useContext(AppContext);

  return (
    <div className="App">
      <Header />
      <MobileMenu />
      { routes }
    </div>
  );
}

export default App;

import React, { useState, createContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';

// import { states } from '../data/regions';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // const [productAnswer, setProductAnswer] = useState(null);
  // const [houseAnswer, setHouseAnswer] = useState(null);
  // const [whoAnswer, setWhoAnswer] = useState(null);
  // const [bugAnswer, setBugAnswer] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isSurvey, setIsSurvey] = useState(true);
  const [addressState, setAddressState] = useState(null);
  // const [bugSuggestions, setBugSuggestions] = useState(["ants", "spiders"]);
  const [cart, setCart] = useState([]);

  const { push } = useHistory();

  const handleMenuClick = (route) => {
    setMobileMenuVisible(false)
    push(route)
    console.log("hi")
  }

  return (
    <AppContext.Provider
      value={{
        // productAnswer,
        // setProductAnswer,
        // whoAnswer,
        // setWhoAnswer,
        // houseAnswer,
        // setHouseAnswer,
        // bugAnswer,
        // setBugAnswer,
        mobileMenuVisible,
        setMobileMenuVisible,
        handleMenuClick,
        isSurvey,
        setIsSurvey,
        addressState,
        setAddressState,
        // bugSuggestions,
        // setBugSuggestions,
        // addBug,

      }}
    >
      {children}
    </AppContext.Provider>
  )
};

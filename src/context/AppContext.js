import React, { useState, createContext, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const location = useLocation()
  // const [productAnswer, setProductAnswer] = useState(null);
  // const [houseAnswer, setHouseAnswer] = useState(null);
  // const [whoAnswer, setWhoAnswer] = useState(null);
  // const [bugAnswer, setBugAnswer] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isSurvey, setIsSurvey] = useState(true);
  const [addressState, setAddressState] = useState(null);
  const [emailQuestion, setEmailQuestion] = useState(false);
  const [cart, setCart] = useState([]);
  const [getAnswers, setGetAnswers] = useState(null);
  const [addOnQuestion, setAddOnQuestion] = useState(false);
  const [webAuthVisible, setWebAuthVisible] = useState(false);

  const { push } = useHistory();

  const handleMenuClick = (route) => {
    setMobileMenuVisible(false)
    push(route)
    console.log("hi")
  }

  useEffect(() => {
    setAddOnQuestion(false);
    setEmailQuestion(false);
    setWebAuthVisible(false);
  }, [location]);

  console.log("emailQuestion", emailQuestion)
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
        emailQuestion,
        setEmailQuestion,
        getAnswers,
        setGetAnswers,
        addOnQuestion,
        setAddOnQuestion,
        webAuthVisible,
        setWebAuthVisible,

      }}
    >
      {children}
    </AppContext.Provider>
  )
};

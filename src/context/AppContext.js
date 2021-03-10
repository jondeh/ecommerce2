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
  const [cart, setCart] = useState([
    {name: "jitterbox smart DIY pest protection", 
    description: "pest control subscription - custom plan",
    price: 35,
    image: null}
  ]);
  const [subTotal, setSubTotal] = useState(cart.reduce((acc, val) => {
    return acc += val.price
  }, 0));
  const [tax, setTax] = useState((subTotal * .0485).toFixed());
  const [getAnswers, setGetAnswers] = useState(null);
  const [addOnQuestion, setAddOnQuestion] = useState(false);
  const [webAuthVisible, setWebAuthVisible] = useState(false);

  const { push } = useHistory();

  const handleMenuClick = (route) => {
    setMobileMenuVisible(false)
    push(route)
    // console.log("hi")
  }

  useEffect(() => {
    setAddOnQuestion(false);
    setEmailQuestion(false);
    setWebAuthVisible(false);
  }, [location]);

  useEffect(() => {
    setSubTotal(() => {
      return cart.reduce((acc, val) => {
        return acc += val.price
      }, 0)
    })
  }, [cart])

  useEffect(() => {
    setTax((subTotal * .0485).toFixed())
  }, [subTotal])

  // console.log("emailQuestion", emailQuestion)
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
        cart, 
        setCart,
        subTotal,
        setSubTotal,
        tax,
        setTax,

      }}
    >
      {children}
    </AppContext.Provider>
  )
};

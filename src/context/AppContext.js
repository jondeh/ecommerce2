import React, { useState, createContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { GiHummingbird, GiArchiveResearch } from "react-icons/gi";
import { BiPackage } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import {colors} from '../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const location = useLocation();
  // const [productAnswer, setProductAnswer] = useState(null);
  // const [houseAnswer, setHouseAnswer] = useState(null);
  // const [whoAnswer, setWhoAnswer] = useState(null);
  // const [bugAnswer, setBugAnswer] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [mobileAuthVisible, setMobileAuthVisible] = useState(false);
  const [isSurvey, setIsSurvey] = useState(true);
  const [addressState, setAddressState] = useState(null);
  const [emailQuestion, setEmailQuestion] = useState(false);
  const [cart, setCart] = useState([
    {
      name: "jitterbox smart DIY pest protection",
      description: "pest control subscription - custom plan",
      price: 35,
      image: null,
    },
  ]);
  const [subTotal, setSubTotal] = useState(
    cart.reduce((acc, val) => {
      return (acc += val.price);
    }, 0)
  );
  const [tax, setTax] = useState((subTotal * 0.0485).toFixed());
  const [getAnswers, setGetAnswers] = useState(null);
  const [addOnQuestion, setAddOnQuestion] = useState(false);
  const [webAuthVisible, setWebAuthVisible] = useState(false);

  const { push } = useHistory();

  const handleMenuClick = (route) => {
    setMobileMenuVisible(false);
    push(route);
    // console.log("hi")
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
    let webMenu = document.getElementById("mobile-menu");
    webMenu.classList.remove("open");
  };

  useEffect(() => {
    closeMobileMenu();
    setAddOnQuestion(false);
    setEmailQuestion(false);
    setWebAuthVisible(false);
    setMobileAuthVisible(false);
  }, [location]);

  useEffect(() => {
    setSubTotal(() => {
      return cart.reduce((acc, val) => {
        return (acc += val.price);
      }, 0);
    });
  }, [cart]);

  useEffect(() => {
    setTax((subTotal * 0.0485).toFixed());
  }, [subTotal]);

  const handleLeave = (id) => {
    console.log("IDENTIFICATION PLEASE: ", id);
    let webMenu = document.getElementById(id);
    webMenu.classList.remove("open");
  };

  const handleSeeHowItWorks = (id) => {
    if (id) {
      handleLeave(id);
    }
    push("/how-to");
  };
  const handleProducts = (id) => {
    if (id) {
      handleLeave(id);
    }
  };
  const handleGetStarted = (id) => {
    console.log('HANDLE GET STARTED: ', id)
    if (id) {
      handleLeave(id);
    }
    push("/customize");
  };
  const handleReviews = (id) => {
    if (id) {
      handleLeave(id);
    }
  };

  const webNavData = (id) => {
    return [
      {
        text: "get started",
        subText: "customize my plan",
        onClick: () => handleGetStarted(id),
        image: <GiHummingbird color={accent} />,
      },
      {
        text: "see how it works",
        subText: "why Jitterbox?",
        onClick: () => handleSeeHowItWorks(id),
        image: <GiArchiveResearch color={accent} />,
      },
      {
        text: "products",
        subText: "see all our products",
        onClick: () => handleProducts(id),
        image: <BiPackage color={accent} />,
      },
      {
        text: "reviews",
        subText: "don't take our word for it",
        onClick: () => handleReviews(id),
        image: <AiFillStar color={"gold"} />,
      },
    ];
  };

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
        mobileAuthVisible,
        setMobileAuthVisible,
        closeMobileMenu,
        handleLeave,
        handleSeeHowItWorks,
        handleProducts,
        handleGetStarted,
        handleReviews,
        webNavData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

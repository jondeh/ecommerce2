import React, { useState, createContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';

// import { states } from '../data/regions';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isSurvey, setIsSurvey] = useState(true);
  const [addressState, setAddressState] = useState(null);
  const [bugSuggestions, setBugSuggestions] = useState(["ants", "spiders"]);
  const [currentOrganicOption, setCurrentOrganicOption] = useState(null);
  const { push } = useHistory();

//   useEffect(() => {
//     console.log("DING DING DING");
//     if (addressState) {
//       setBugSuggestions(states[addressState])
//     }
//   }, [addressState])

  const addBug = (bug) => {
    let newSuggestions = bugSuggestions.map(e => e)

    setBugSuggestions(() => {
      let bugIndex = newSuggestions.findIndex(e => e === bug)

      if (bugIndex === -1) {
        return [...newSuggestions, bug]
      } else {
        let finalSuggestions = [...newSuggestions]
        finalSuggestions.splice(bugIndex, 1)
        return [...finalSuggestions]
      }
    })
  }

  const handleMenuClick = (route) => {
    setMobileMenuVisible(false)
    push(route)
    console.log("hi")
  }

  return (
    <AppContext.Provider
      value={{
        mobileMenuVisible,
        setMobileMenuVisible,
        handleMenuClick,
        isSurvey,
        setIsSurvey,
        addressState,
        setAddressState,
        bugSuggestions,
        setBugSuggestions,
        addBug,
        currentOrganicOption,
        setCurrentOrganicOption,

      }}
    >
      {children}
    </AppContext.Provider>
  )
};

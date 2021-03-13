import React, { useState, createContext, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { states } from "../data/webData";

export const CustomContext = createContext(null);
export const CustomProvider = ({ children }) => {
  const location = useLocation();
  const [whoAnswer, setWhoAnswer] = useState(null);
  const [whoPets, setWhoPets] = useState([])
  const [homeAnswer, setHomeAnswer] = useState(null);
  const [bugAnswer, setBugAnswer] = useState(null);
  const [sprayerAnswer, setSprayerAnswer] = useState(null);
  const [addressState, setAddressState] = useState(null);
  const [addressCity, setAddressCity] = useState(null);
  const [surveyNum, setSurveyNum] = useState(0);
  const [farthestIndex, setFarthestIndex] = useState(0);

  useEffect(() => {
    console.log("HIT 1")
    if (surveyNum > farthestIndex) {
      setFarthestIndex(surveyNum);
    }
  }, [surveyNum])

  useEffect(() => {
    if (homeAnswer) {
        // console.log("homeAnswer", homeAnswer);
        let homeAnswerArr = homeAnswer[0].split(',');
        // console.log("homeAnswerArr", homeAnswerArr)
        let homeState = homeAnswerArr[homeAnswerArr.length-2].trim().toLowerCase();
        let homeCity = homeAnswerArr[homeAnswerArr.length-3].trim().toLowerCase();
        // console.log("homeState", homeState)
      setAddressState(homeState);
      setAddressCity(homeCity);
    }
  }, [homeAnswer]);

  useEffect(() => {
    // console.log("DING DING DING");
    if (addressState) {
      if (states[addressState]) {
        setBugAnswer(states[addressState]);
      } else {
        setBugAnswer(["ants", "spiders"]);
      }
    }
  }, [addressState]);

  const addBug = (bug) => {
    let newSuggestions = bugAnswer.map((e) => e);

    setBugAnswer(() => {
      let bugIndex = newSuggestions.findIndex((e) => e === bug);

      if (bugIndex === -1) {
        return [...newSuggestions, bug];
      } else {
        let finalSuggestions = [...newSuggestions];
        finalSuggestions.splice(bugIndex, 1);
        return [...finalSuggestions];
      }
    });
  };

  useEffect(() => {
    console.log("HIT 2", surveyNum, farthestIndex)
    setSurveyNum(0);
    setFarthestIndex(0);
    setWhoAnswer(null);
    setWhoPets([]);
    setHomeAnswer(null);
    setBugAnswer(null);
    setSprayerAnswer(null);
    setAddressState(null);
    setAddressCity(null);
  }, [location]);

  const handlePetClick = (myPet) => {
    // console.log("myPet", myPet)
    let petsArr = [...whoPets];
    let petIndex = petsArr.findIndex((e) => e === myPet)
    if (petIndex === -1) {
        petsArr.push(myPet)
    } else {
        petsArr.splice(petIndex, 1)
    }

    setWhoPets(petsArr);
};

  // console.log("whoAnswer", whoAnswer)

  return (
    <CustomContext.Provider
      value={{
        whoAnswer, setWhoAnswer,
        whoPets, setWhoPets,
        homeAnswer, setHomeAnswer,
        bugAnswer, setBugAnswer,
        sprayerAnswer, setSprayerAnswer,
        addressState, setAddressState,
        addBug,
        handlePetClick,
        addressCity, setAddressCity,
        surveyNum, setSurveyNum,
        farthestIndex, setFarthestIndex,

      }}
    >
      {children}
    </CustomContext.Provider>
  )
};

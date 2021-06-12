import React, { useState, createContext, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { states } from "../data/webData";
import { UserContext } from '../context/UserContext';
import axios from 'axios';

export const CustomContext = createContext(null);
export const CustomProvider = ({ children }) => {
  const { register,  setUserLatLng} = useContext(UserContext);

  const location = useLocation();
  const [whoAnswer, setWhoAnswer] = useState("no");
  const [whoPets, setWhoPets] = useState([])
  const [homeAnswer, setHomeAnswer] = useState(null);
  const [bugAnswer, setBugAnswer] = useState(null);
  const [sprayerAnswer, setSprayerAnswer] = useState(null);
  const [addressState, setAddressState] = useState(null);
  const [addressCity, setAddressCity] = useState(null);
  const [surveyNum, setSurveyNum] = useState(0);
  const [farthestIndex, setFarthestIndex] = useState(0);
  const [propData, setPropData] = useState(null);
  const [homeLoad, setHomeLoad] = useState(false);
  const [customLatLng, setCustomLatLng] = useState({lat: '', lng: ''});
  const [address, setAddress] = useState("");
  const [didAPICallFail, setDidAPICallFail] = useState(false);
  const [perimeter, setPerimeter] = useState(0);
  const [squareFeet, setSquareFeet] = useState(0);
  const [sprayerInfo, setSprayerInfo] = useState(false);



  useEffect(() => {
    if (surveyNum > farthestIndex) {
      setFarthestIndex(surveyNum);
    }
  }, [surveyNum])

  useEffect(() => {
    if (homeAnswer) {
        let homeAnswerArr = homeAnswer.split(',');
        let homeState = homeAnswerArr[homeAnswerArr.length-2].trim().toLowerCase();
        let homeCity = homeAnswerArr[homeAnswerArr.length-3].trim().toLowerCase();
      setAddressState(homeState);
      setAddressCity(homeCity);
    };
  }, [homeAnswer]);

  useEffect(() => {
    if (addressState) {
      if (states[addressState]) {
        setBugAnswer(states[addressState]);
      } else {
        setBugAnswer(["ants", "spiders"]);
      }
    }
  }, [addressState]);

  const getPropData = (address) => {

    if (address) {
      let homeAnswerArr = address.split(',');
      let streetAddress = homeAnswerArr.shift();
      homeAnswerArr.pop();
      let region = homeAnswerArr.join('')
      axios.post(`/get-prop-data`, {address, streetAddress, region}).then(res => {
        console.log("res: ", res)
        let propData = res.data
        setSquareFeet(Math.ceil(propData[0].sizeData.grossSize))
        console.log("propData: ", propData[0])
        setPerimeter(Math.ceil((Math.sqrt(propData[0].sizeData.groundFloorSize + propData[0].parkingData.prkgSize)*4)*1.1))
        setHomeAnswer(address)
        setPropData(propData)
        setHomeLoad(false);
        setDidAPICallFail(false);
      })
    };
  };
  
  useEffect(() => {
    if (address) {
      setHomeLoad(true);
      getPropData(address)
    }
  }, [address]);

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
    setSurveyNum(0);
    setFarthestIndex(0);
    setWhoAnswer("no");
    setWhoPets([]);
    setHomeAnswer(null);
    setBugAnswer(null);
    setSprayerAnswer(null);
    setAddressState(null);
    setAddressCity(null);
    setPropData(null);
    setAddress("");
  }, [location]);

  const handlePetClick = (myPet) => {
    let petsArr = [...whoPets];
    let petIndex = petsArr.findIndex((e) => e === myPet)
    if (petIndex === -1) {
        petsArr.push(myPet)
    } else {
        petsArr.splice(petIndex, 1)
    }

    setWhoPets(petsArr);
};


const handleNavClick = (index) => {
  if (index <= farthestIndex) {
      setSurveyNum(index);
  }
};

const registerUser = ({email, password}, myplan) => {
  register({email, password, whoAnswer, whoPets, homeAnswer, bugAnswer, sprayerAnswer, addressState, addressCity, address, perimeter, squareFeet, customLatLng }, myplan)
}

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
        propData, setPropData,
        getPropData,
        homeLoad, setHomeLoad,
        customLatLng, setCustomLatLng,
        address, setAddress,
        didAPICallFail,
        perimeter, setPerimeter,
        handleNavClick,
        sprayerInfo, setSprayerInfo,
        squareFeet, setSquareFeet,
        registerUser

      }}
    >
      {children}
    </CustomContext.Provider>
  )
};

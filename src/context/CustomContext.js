import React, { useState, createContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { states } from '../data/webData'
import axios from 'axios'

export const CustomContext = createContext(null)
export const CustomProvider = ({ children }) => {
  const location = useLocation()
  const [whoAnswer, setWhoAnswer] = useState('no')
  const [whoPets, setWhoPets] = useState([])
  const [homeAnswer, setHomeAnswer] = useState(null)
  const [bugAnswer, setBugAnswer] = useState(null)
  const [sprayerAnswer, setSprayerAnswer] = useState(null)
  const [addressState, setAddressState] = useState(null)
  const [addressCity, setAddressCity] = useState(null)
  const [surveyNum, setSurveyNum] = useState(0)
  const [farthestIndex, setFarthestIndex] = useState(0)
  const [propData, setPropData] = useState(null)
  const [homeLoad, setHomeLoad] = useState(false)
  const [customLatLng, setCustomLatLng] = useState({ lat: '', lng: '' })
  const [address, setAddress] = useState('')
  const [didAPICallFail, setDidAPICallFail] = useState(false)
  const [perimeter, setPerimeter] = useState(0)
  const [squareFeet, setSquareFeet] = useState(0)
  const [sprayerInfo, setSprayerInfo] = useState(false)

  useEffect(() => {
    if (surveyNum > farthestIndex) {
      setFarthestIndex(surveyNum)
    }
  }, [surveyNum])

  useEffect(() => {
    if (homeAnswer) {
      let homeAnswerArr = homeAnswer.split(',')
      let homeState = homeAnswerArr[homeAnswerArr.length - 2]
        .trim()
        .toLowerCase()
      let homeCity = homeAnswerArr[homeAnswerArr.length - 3]
        .trim()
        .toLowerCase()
      setAddressState(homeState)
      setAddressCity(homeCity)
    }
  }, [homeAnswer])

  useEffect(() => {
    if (addressState) {
      if (states[addressState]) {
        setBugAnswer(states[addressState])
      } else {
        setBugAnswer(['ants', 'spiders'])
      }
    }
  }, [addressState])

  const getPropData = address => {
    if (address) {
      let homeAnswerArr = address.split(',')
      let streetAddress = homeAnswerArr.shift()
      homeAnswerArr.pop()
      let region = homeAnswerArr.join('')
      let url = `https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/basicprofile?address1=${streetAddress}&address2=${region}`

      // todo MOVE API KEY TO SERVER INDEX.JS

      let headers = {
        apikey: '796f3114d0930206f05e32b23eded151',
        accept: 'application/json'
      }

      axios
        .get(url, { headers })
        .then(res => {
          let propData = res.data.property.map((e, i) => {
            return {
              sizeData: e.building.size,
              summaryData: e.building.summary,
              constructionData: e.building.construction,
              lotData: e.lot,
              interiorData: e.building.interior,
              parkingData: e.building.parking
            }
          })
          setSquareFeet(Math.ceil(propData[0].sizeData.grossSize))
          setPerimeter(
            Math.ceil(
              Math.sqrt(
                propData[0].sizeData.groundFloorSize +
                  propData[0].parkingData.prkgSize
              ) *
                4 *
                1.1
            )
          )
          setHomeAnswer(address)
          setPropData(propData)
          setHomeLoad(false)
          setDidAPICallFail(false)
        })
        .catch(err => {
          setDidAPICallFail(true)
          setHomeLoad(false)
        })
    }
  }

  useEffect(() => {
    if (address) {
      setHomeLoad(true)
      getPropData(address)
    }
  }, [address])

  const addBug = bug => {
    let newSuggestions = bugAnswer.map(e => e)

    setBugAnswer(() => {
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

  useEffect(() => {
    setSurveyNum(0)
    setFarthestIndex(0)
    setWhoAnswer('no')
    setWhoPets([])
    setHomeAnswer(null)
    setBugAnswer(null)
    setSprayerAnswer(null)
    setAddressState(null)
    setAddressCity(null)
    setPropData(null)
    setAddress('')
  }, [location])

  const handlePetClick = myPet => {
    let petsArr = [...whoPets]
    let petIndex = petsArr.findIndex(e => e === myPet)
    if (petIndex === -1) {
      petsArr.push(myPet)
    } else {
      petsArr.splice(petIndex, 1)
    }

    setWhoPets(petsArr)
  }

  const handleNavClick = index => {
    if (index <= farthestIndex) {
      setSurveyNum(index)
    }
  }

  return (
    <CustomContext.Provider
      value={{
        whoAnswer,
        setWhoAnswer,
        whoPets,
        setWhoPets,
        homeAnswer,
        setHomeAnswer,
        bugAnswer,
        setBugAnswer,
        sprayerAnswer,
        setSprayerAnswer,
        addressState,
        setAddressState,
        addBug,
        handlePetClick,
        addressCity,
        setAddressCity,
        surveyNum,
        setSurveyNum,
        farthestIndex,
        setFarthestIndex,
        propData,
        setPropData,
        getPropData,
        homeLoad,
        setHomeLoad,
        customLatLng,
        setCustomLatLng,
        address,
        setAddress,
        didAPICallFail,
        perimeter,
        setPerimeter,
        handleNavClick,
        sprayerInfo,
        setSprayerInfo,
        squareFeet,
        setSquareFeet
      }}
    >
      {children}
    </CustomContext.Provider>
  )
}

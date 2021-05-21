import React, { useState, createContext, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { CustomContext } from '../context/CustomContext';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  // const { customLatLng } = useContext(CustomContext)
  const { push } = useHistory();
  const [user, setUser] = useState(null);
  const [answers, setAnswers] = useState({
    productAnswer: null,
    homeAnswer: null,
    whoAnswer: null,
    bugAnswer: null,
    sprayerAnswer: null,
  })
  const [emailAnswer, setEmailAnswer] = useState(null);
  // const [userLatLng, setUserLatLng] = useState({lat: 40.4593505, lng: -111.7574137});
  const [userLatLng, setUserLatLng] = useState({lat: '', lng: ''});
  console.log("userLatLng: ", userLatLng)

  useEffect(() => {
    const json = localStorage.getItem("user");
    // const lat = localStorage.getItem("house_lat")
    // const lng = localStorage.getItem("house_lng")
    // console.log("json-2", json)
    // console.log("lat: ", lat)
    // const savedLat = JSON.parse(lat)
    // const savedLng = JSON.parse(lng)
    // if (savedLat && savedLng) {
    //   setUserLatLng({lat: savedLat, lng: savedLng})
    // }
    const savedUser = JSON.parse(json);
    if (savedUser) {
      setUser(savedUser)
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(user)
    // console.log("json-1", json)
    localStorage.setItem("user", json)
  }, [user]);

  // useEffect(() => {
  //   const lat = JSON.stringify(userLatLng?.lat)
  //   const lng = JSON.stringify(userLatLng?.lng)
  //   // console.log("json-1", json)
  //   localStorage.setItem("house_lat", lat)
  //   localStorage.setItem("house_lng", lng)
  // }, [userLatLng]);

  const login = (body) => {
      // console.log("body", body)
      axios
        .post("/auth/login", body)
        .then(({ data }) => {
          // console.log("login data", data)
          setUser(data)
          push("/")
        })
        .catch(({ message }) => console.log(message))
    };

    const register = (body, myPlan) => {
      body = {...body, ...answers}
      // console.log("register body", body)
      axios
        .post("/auth/register", body)
        .then(({ data }) => {
          // console.log("data", data)
          setUser(data)
          if (myPlan) {
            push("/my-plan")
          } else {
            push("/")
          }
        })
        .catch(({ message }) => console.log(message))
    };

    const logout = () => {
      // console.log("logout hit")
      axios
        .post("/auth/logout")
        .then(() => {
          setUser(null)
          // console.log("hit 2")
          push("/")
        })
        .catch(({ message }) => console.log(message))
    };

   

  //   const getUser = () => {
  //     axios
  //       .get("/auth/user")
  //       .then(({ data }) => setUser(data))
  //       .catch(({ message }) => console.log(message))
  //   };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
        answers,
        setAnswers,
        emailAnswer,
        setEmailAnswer,
        userLatLng, setUserLatLng
        // getUser,

      }}
    >
      {children}
    </UserContext.Provider>
  )
};

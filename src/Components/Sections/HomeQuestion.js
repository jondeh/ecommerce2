import React, { useEffect, useState, useContext } from "react";

import "../../SCSS/HomeQuestion.scss";
import HomeOption from "../Utility/HomeOption";
import { Button } from "@material-ui/core";
import GoogleFind from '../Utility/GoogleFind';
import {FiEdit3} from 'react-icons/fi';
import { CustomContext } from '../../context/CustomContext';

// To Do 
import HouseData from '../Utility/HouseData';

const HomeQuestion = ({ homeAnswer, setHomeAnswer }) => {
  const { getPropData, setHomeLoad, latLng, setLatLng, address, setAddress, didAPICallFail } = useContext(CustomContext);
  // const [address, setAddress] = useState(homeAnswer && homeAnswer[0]);
  // const [latLng, setLatLng] = useState(null);
  const [editAddress, setEditAddress] = useState("");
  const [size, setSize] = useState("");

  const homeOptions = [
    { text: "0-1000" },
    { text: "1000-4500" },
    { text: "4500+" },
  ];

  const handleHomeClick = (option) => {
    console.log("homeClickAddress", address)
    setHomeAnswer([address ? address : editAddress, option]);
  };

  const handleEditClick = () => {
    setEditAddress(address);
    setAddress('');
  };


  console.log("address", address)

  const mappedHomeOptions = homeOptions.map((e,i) => {
    return (
      <HomeOption
        key={i}
        {...{
          option: i,
          homeAnswer: homeAnswer && homeAnswer[1],
          setHomeAnswer,
          handleHomeClick,
          text: e.text,
        }}
      />
    ); 
  })

  // {homeOptions.map((e, i) => {
  //   return (
  //     <HomeOption
  //       key={i}
  //       {...{
  //         option: i,
  //         homeAnswer: homeAnswer && homeAnswer[1],
  //         setHomeAnswer,
  //         handleHomeClick,
  //         text: e.text,
  //       }}
  //     />
  //   );
  // })}
  
  return (
    <div className="home-question-container">
      {
        didAPICallFail ? <div className="home-question-size">
        <h3>Approximately how many square feet is your home?</h3>

        <div className="home-question-size-options">
          {mappedHomeOptions}
        </div>
        </div> : <HouseData {...{latLng}}/>
      }
      
      <div className="home-question-address">
        {
            address ? 
            <Button onClick={handleEditClick} variant="contained"><FiEdit3 className="edit-icon" />{address}</Button> : 
            <div className="add-input-container">
                {/* <h3>What is your home address?</h3> */}
                <GoogleFind {...{setAddress, setLatLng}}/>
            </div>
        }
        
        {/* <Button variant="contained" onClick={() => setAddress(addressInput)}>
          OK
        </Button> */}
      </div>
      {/* {address || (homeAnswer && homeAnswer[0]) ? (
        <div className="home-question-size">
          <h3>Approximately how many square feet is your home?</h3>

          <div className="home-question-size-options">
            {mappedHomeOptions}
          </div>
        </div>
      ) : (
        <div className="home-question-size"></div>
        )} */}
    </div>
  );
};

export default HomeQuestion;

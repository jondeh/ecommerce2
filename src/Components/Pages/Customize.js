import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import { CustomContext } from "../../context/CustomContext";
// import { useHistory } from "react-router-dom";
import "../../SCSS/Customize.scss";
import { Button } from "@material-ui/core";
import { states } from "../../data/webData";
import {IoArrowForwardCircleSharp, IoArrowBackCircleSharp} from 'react-icons/io5';
import {BsArrowRight, BsArrowLeft, BsArrowRightShort} from 'react-icons/bs';

import BugQuestion from "../Sections/BugQuestion";
import WhoQuestion from "../Sections/WhoQuestion";
// import ProductQuestion from "../Sections/ProductQuestion";
import HomeQuestion from "../Sections/HomeQuestion";
import SprayerQuestion from "../Sections/SprayerQuestion";
import CustomWhere from '../Utility/CustomWhere';
import CustomColumn from '../Sections/CustomizeColumn';
import CustomizeColumn from "../Sections/CustomizeColumn";
import HouseData from '../Utility/HouseData';
import SurveyInfo from '../Utility/SurveyInfo';
// import EmailQuestion from "../Sections/EmailQuestion";

const Customize = () => {
  const { 
    isSurvey, 
    setEmailQuestion } = useContext(AppContext);
  const { setAnswers } = useContext(UserContext);
  const {  
          homeAnswer, setHomeAnswer,
          whoAnswer, setWhoAnswer,
          bugAnswer, setBugAnswer,
          sprayerAnswer, setSprayerAnswer,
          addressState, setAddressState,
          addBug,
          addressCity, setAddressCity,
          surveyNum, setSurveyNum,
          farthestIndex,
          customLatLng,
          handleNavClick,
          sprayerInfo, setSprayerInfo,
        } = useContext(CustomContext);
  // const [surveyNum, setSurveyNum] = useState(0);


  const handleClick = (type, comp) => {
    switch (type) {
      case "previous":
        if (surveyNum > 0) {
          setSurveyNum((surveyNum) => {
            return (surveyNum -= 1);
          });
        }
        break;
      case "next":
        if (surveyNum < surveyPosition.length - 1) {
          setSurveyNum((surveyNum) => {
            return (surveyNum += 1);
          });
        }
        break;
      case "get-plan":
        setAnswers({
          // productAnswer,
          whoAnswer,
          homeAnswer,
          bugAnswer,
          sprayerAnswer,
        });
        setSprayerInfo(true);
        setEmailQuestion(true);
        break;
    }
  };

  const surveyPosition = [
    // {
    //   component: (
    //     <ProductQuestion
    //       {...{ productAnswer, setProductAnswer, handleClick }}
    //     />
    //   ),
    //   description: "What are you interested in?",
    // },
    {
      component: <WhoQuestion {...{ whoAnswer, setWhoAnswer, handleClick }} />,
      description: <p>A little about who you're protecting:</p>,
      info: <SurveyInfo {...{type: "who"}}/> ,
    },
    {
      component: (
        <HomeQuestion {...{ homeAnswer, setHomeAnswer, handleClick }} />
      ),
      description: <p>Next, a little bit about your <strong>house</strong>.</p>,
      info: <HouseData {...{customLatLng}}/> ,
    },
    {
      component: (
        <BugQuestion {...{ bugAnswer, setBugAnswer, handleClick, addBug }} />
      ),
      description:
      <p>Your <span className="address-city">{addressCity}</span> neighbors use Jitterbox to protect against the highlighted pests.  Do you need protection from any others?</p>,
      info: <SurveyInfo  {...{type: "bugs"}}/> ,
    },
    {
      component: (
        <SprayerQuestion
          {...{ sprayerAnswer, setSprayerAnswer, handleClick }}
        />
      ),
      description: <p>Do you already have a sprayer?</p>,
      info: <SurveyInfo  {...{type: "sprayer"}}/> ,
    },
  ];

  return (
    <div className={`customize-container-${isSurvey}`}>
      <CustomizeColumn {...{
          homeAnswer, setHomeAnswer,
          whoAnswer, setWhoAnswer,
          bugAnswer, setBugAnswer,
          sprayerAnswer, setSprayerAnswer,
          addressState, setAddressState,
          addBug,
          addressCity, setAddressCity,
          surveyNum, setSurveyNum,
          }}>
      <div className="left-column">
        <div>{(whoAnswer && farthestIndex >= 1) && <span onClick={() => handleNavClick(0)}>{whoAnswer}</span>}</div>
        <div>{(homeAnswer && farthestIndex >= 2) && <span onClick={() => handleNavClick(1)}>{homeAnswer}</span>}</div>
        <div>{farthestIndex >= 3 && <span onClick={() => handleNavClick(2)}>{farthestIndex >= 3 && bugAnswer}</span>}</div>
        <div>{(sprayerInfo && (sprayerAnswer || sprayerAnswer === 0)) && <span onClick={() => handleNavClick(3)}>{sprayerAnswer}</span>}</div>
        
      </div>
        <CustomWhere {...{surveyPosition, surveyNum}}/>
      </CustomizeColumn>
      <div className={`questions-container`}>
        <span className="qc-description">{surveyPosition[surveyNum].description}</span> 
        {/* <br /> */}
        {isSurvey ? surveyPosition[surveyNum].component : null}
        <div className="customize-button-container">
          {surveyNum > 0 ? (      // PREVIOUS BUTTON
            // <Button variant="contained" onClick={() => handleClick("previous")}>
            //   PREVIOUS
            // </Button>
            <Button className="previous-button" variant="contained" onClick={() => handleClick("previous")}>
              <BsArrowLeft />
            </Button>
          ) : (
            // <Button variant="contained" disabled>
            //   PREVIOUS
            // </Button>
            // <IoArrowBackCircleSharp size={35} />
            null

          )}

          {surveyNum >= surveyPosition.length - 1 ? (
            <Button className="plan-button" variant="contained" onClick={() => handleClick("get-plan")}>
              <span>GET PLAN</span>
            </Button>
          ) : 
          [whoAnswer, homeAnswer, bugAnswer, sprayerAnswer][
              surveyNum
            ] === null ? (
            // <Button
            //   variant="contained"
            //   onClick={() => handleClick("next")}
            //   disabled
            // >
            //   NEXT
            // </Button>
            null
            // <IoArrowForwardCircleSharp />
          ) : (
            // <Button variant="contained" onClick={() => handleClick("next")}>
            //   NEXT
            // </Button>
            <Button className="next-button" variant="contained" onClick={() => handleClick("next")} > 
              <BsArrowRight />
            </Button>
           
          )}
        </div>
      </div>
      <CustomizeColumn>
        <div className="div1">
          {isSurvey ? surveyPosition[surveyNum].info : null}
        </div>
      </CustomizeColumn>
    </div>
  );
};


export default Customize;

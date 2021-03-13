import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import { CustomContext } from "../../context/CustomContext";
// import { useHistory } from "react-router-dom";
import "../../SCSS/Customize.scss";
import { Button } from "@material-ui/core";
import { states } from "../../data/webData";
// import {IoArrowForwardCircleSharp, IoArrowBackCircleSharp} from 'react-icons/io5';

import BugQuestion from "../Sections/BugQuestion";
import WhoQuestion from "../Sections/WhoQuestion";
// import ProductQuestion from "../Sections/ProductQuestion";
import HomeQuestion from "../Sections/HomeQuestion";
import SprayerQuestion from "../Sections/SprayerQuestion";
import CustomWhere from '../Utility/CustomWhere';
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
    },
    {
      component: (
        <HomeQuestion {...{ homeAnswer, setHomeAnswer, handleClick }} />
      ),
      description: <p>Next, a little bit about your house.</p>,
    },
    {
      component: (
        <BugQuestion {...{ bugAnswer, setBugAnswer, handleClick, addBug }} />
      ),
      description:
        <p>People in <span className="address-city">{addressCity}</span> typically have these pests.  Select the pests you need help with.</p>,
    },
    {
      component: (
        <SprayerQuestion
          {...{ sprayerAnswer, setSprayerAnswer, handleClick }}
        />
      ),
      description: <p>Do you already have a sprayer?</p>,
    },
  ];

  return (
    <div className={`customize-container-${isSurvey}`}>
      <CustomWhere {...{surveyPosition, surveyNum}}/>
      <div className={`questions-container`}>
        <span className="qc-description">{surveyPosition[surveyNum].description}</span> <br />
        {isSurvey ? surveyPosition[surveyNum].component : null}
        <div className="customize-button-container">
          {surveyNum > 0 ? (
            <Button variant="contained" onClick={() => handleClick("previous")}>
              PREVIOUS
            </Button>
            // <IoArrowBackCircleSharp size={35} />

          ) : (
            <Button variant="contained" disabled>
              PREVIOUS
            </Button>
            // <IoArrowBackCircleSharp size={35} />

          )}

          {surveyNum >= surveyPosition.length - 1 ? (
            <Button variant="contained" onClick={() => handleClick("get-plan")}>
              GET PLAN
            </Button>
          ) : [whoAnswer, homeAnswer, bugAnswer, sprayerAnswer][
              surveyNum
            ] === null ? (
            <Button
              variant="contained"
              onClick={() => handleClick("next")}
              disabled
            >
              NEXT
            </Button>
            // <IoArrowForwardCircleSharp />
          ) : (
            <Button variant="contained" onClick={() => handleClick("next")}>
              NEXT
            </Button>
            // <IoArrowForwardCircleSharp />
          )}
        </div>
      </div>
    </div>
  );
};

export default Customize;

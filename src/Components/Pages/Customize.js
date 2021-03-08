import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import "../../SCSS/Customize.scss";
import { Button } from "@material-ui/core";
import { states } from "../../data/webData";

import BugQuestion from "../Sections/BugQuestion";
import WhoQuestion from "../Sections/WhoQuestion";
import ProductQuestion from "../Sections/ProductQuestion";
import HomeQuestion from "../Sections/HomeQuestion";
import SprayerQuestion from "../Sections/SprayerQuestion";
import EmailQuestion from "../Sections/EmailQuestion";

const Customize = () => {
  const { push } = useHistory();
  const [productAnswer, setProductAnswer] = useState(null);
  const [homeAnswer, setHomeAnswer] = useState(null);
  const [whoAnswer, setWhoAnswer] = useState("hi");
  const [bugAnswer, setBugAnswer] = useState(["ants", "spiders"]);
  const [sprayerAnswer, setSprayerAnswer] = useState(null);
  const [addressState, setAddressState] = useState(null);
  const { isSurvey, setIsSurvey, emailQuestion, setEmailQuestion } = useContext(
    AppContext
  );
  const { setAnswers } = useContext(UserContext);
  const [surveyNum, setSurveyNum] = useState(0);

  useEffect(() => {
    if (homeAnswer) {
        console.log("homeAnswer", homeAnswer);
        let homeAnswerArr = homeAnswer[0].split(',');
        console.log("homeAnswerArr", homeAnswerArr)
        let homeState = homeAnswerArr[homeAnswerArr.length-2].trim().toLowerCase();
        console.log("homeState", homeState)
      setAddressState(homeAnswerArr[homeAnswerArr.length-2].trim().toLowerCase());
    }
  }, [homeAnswer]);

  useEffect(() => {
    console.log("DING DING DING");
    if (addressState) {
      setBugAnswer(states[addressState]);
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
          productAnswer,
          homeAnswer,
          whoAnswer,
          bugAnswer,
          sprayerAnswer,
        });
        setEmailQuestion(true);
        break;
    }
  };

  const surveyPosition = [
    {
      component: (
        <ProductQuestion
          {...{ productAnswer, setProductAnswer, handleClick }}
        />
      ),
      description: "What are you interested in?",
    },
    {
      component: (
        <HomeQuestion {...{ homeAnswer, setHomeAnswer, handleClick }} />
      ),
      description: "Next, a little bit about your house.",
    },
    {
      component: <WhoQuestion {...{ whoAnswer, setWhoAnswer, handleClick }} />,
      description: "A little bit about who you're protecting.",
    },
    {
      component: (
        <BugQuestion {...{ bugAnswer, setBugAnswer, handleClick, addBug }} />
      ),
      description:
        "People in XYZ typically have these pests.  Select the pests you need help with.",
    },
    {
      component: (
        <SprayerQuestion
          {...{ sprayerAnswer, setSprayerAnswer, handleClick }}
        />
      ),
      description: "Do you already have a sprayer?",
    },
  ];

  return (
    <div className={`customize-container-${isSurvey}`}>
      <div className={`questions-container`}>
        <span className="qc-description">{surveyPosition[surveyNum].description}</span> <br />
        {isSurvey ? surveyPosition[surveyNum].component : null}
        <div className="customize-button-container">
          {surveyNum > 0 ? (
            <Button variant="contained" onClick={() => handleClick("previous")}>
              PREVIOUS
            </Button>
          ) : (
            <Button variant="contained" disabled>
              PREVIOUS
            </Button>
          )}
          {surveyNum >= surveyPosition.length - 1 ? (
            <Button variant="contained" onClick={() => handleClick("get-plan")}>
              GET PLAN
            </Button>
          ) : [productAnswer, homeAnswer, whoAnswer, bugAnswer, sprayerAnswer][
              surveyNum
            ] === null ? (
            <Button
              variant="contained"
              onClick={() => handleClick("next")}
              disabled
            >
              NEXT
            </Button>
          ) : (
            <Button variant="contained" onClick={() => handleClick("next")}>
              NEXT
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customize;

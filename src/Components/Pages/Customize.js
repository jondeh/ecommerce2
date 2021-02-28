import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import '../../SCSS/Customize.scss';

import BugQuestion from '../Sections/BugQuestion';
import WhoQuestion from '../Sections/WhoQuestion';
import ProductQuestion from '../Sections/ProductQuestion';
import HomeQuestion from '../Sections/HomeQuestion';


const Customize = () => {
    const { push } = useHistory()
    const { isSurvey, setIsSurvey } = useContext(AppContext);
    const [surveyNum, setSurveyNum] = useState(0);
    const [surveyPosition, setSurveyPosition] = useState([
        {component: <ProductQuestion />, description: "What are you interested in?"}, 
        {component: <HomeQuestion />, description: "Next: a little bit about your house."},
        {component: <WhoQuestion />, description: "A little bit about who you're protecting."}, 
        {component: <BugQuestion />, description: "People in XYZ typically have these pests.  Select the pests you need help with."}, 
      ]);

    //   useEffect(() => {
    //     console.log("isSurvey", isSurvey)
    //   }, [isSurvey])

    const handleClick = (type) => {
        switch (type){
            case "previous":
                if (surveyNum > 0) {
                    setSurveyNum((surveyNum) => {
                        return surveyNum-=1
                    })
                }
                break;
            case "next":
                if (surveyNum < surveyPosition.length-1) {
                    setSurveyNum((surveyNum) => {
                        return surveyNum+=1
                    })
                }
                break;
            case "get-plan":
                console.log("HIT", isSurvey)
                setIsSurvey(false)
                push('/my-plan')
                // push('/my-plan')
                break;
        }
    }


    return (
        <div className={`customize-container-${isSurvey}`}>
            <div className={`questions-container`}>
            <span>{surveyPosition[surveyNum].description}</span> <br/>
            {/* <span>The highlighted pests are common in your area.</span> */}
                {isSurvey ? 
                surveyPosition[surveyNum].component : 
                null} 
                <div className="customize-button-container">
                    {
                        surveyNum > 0 && <button onClick={() => handleClick("previous")}>PREVIOUS</button>
                    }
                    {surveyNum >= surveyPosition.length-1 ? <button onClick={() => handleClick("get-plan")}>GET PLAN</button> : <button onClick={() => handleClick("next")}>NEXT</button>}
                    
                </div>
        </div>
        </div>
    )
}

export default Customize;
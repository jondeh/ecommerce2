import React, { useContext } from 'react';
import '../../SCSS/CustomWhere.scss';
import { CustomContext } from '../../context/CustomContext';

const CustomDot = ({ location, index }) => {
    const {
        whoAnswer, setWhoAnswer,
        homeAnswer, setHomeAnswer,
        bugAnswer, setBugAnswer,
        sprayerAnswer, setSprayerAnswer,
        surveyNum, setSurveyNum,
        farthestIndex, setFarthestIndex,
     } = useContext(CustomContext);
    
    const dotStyle = {
            // WHITE RING - CELADON DOT //

        // background: index <= farthestIndex ? '#ACE1AF' : '#B0C4DE',
        // border: surveyNum === index && '.5em solid whitesmoke',

            // CELADON RING - WHITE DOT //

        // background: surveyNum === index ? "whitesmoke" : index < farthestIndex ? '#ACE1AF' : '#B0C4DE',
        // border: surveyNum === index && '.5em solid #9aca9c',

            // SLIGHTLY DARKER RING - CELADON DOT //

        background: index <= farthestIndex ? '#ACE1AF' : '#B0C4DE',
        border: surveyNum === index && '.45em solid #9aca9c',

            // RADIAL GRADIENT //

        // background: index <= farthestIndex ? 'radial-gradient(darkgreen, #ACE1AF)' : '#B0C4DE',
        // border: surveyNum === index && '.5em solid #9aca9c',

            // CELADON RING - DARK BLUE DOT //

        // background: surveyNum === index ? "#5D76A9" : index < farthestIndex ? '#ACE1AF' : '#B0C4DE',
        // border: surveyNum === index && '.5em solid #ACE1AF',

        cursor: index <= farthestIndex ? "pointer" : "auto",
        // height: "1.5em",
        // width: "1.5em",
    };

    const handleNavClick = () => {
        console.log("NAV CLICK: ", index, farthestIndex)
        if (index <= farthestIndex) {
            setSurveyNum(index);
        }
    }

    // console.log("dot location: ", surveyNum, index)
    
    return (
        <div className="dot" style={dotStyle} onClick={handleNavClick}>
            
        </div>
    );
};

export default CustomDot;
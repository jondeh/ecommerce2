import React, { useContext } from 'react';
import '../../SCSS/CustomWhere.scss';
import { CustomContext } from '../../context/CustomContext';
import CustomDot from './CustomDot';

const CustomWhere = ({ surveyPosition, surveyNum }) => {
    const {
        whoAnswer, setWhoAnswer,
        homeAnswer, setHomeAnswer,
        bugAnswer, setBugAnswer,
        sprayerAnswer, setSprayerAnswer,
     } = useContext(CustomContext);
    
    // const dotStyle = {
    //     background: [whoAnswer][surveyNum] !== null ? 'yellow' : 'blue',
    //     height: "1.5em",
    //     width: "1.5em",
    // }

    const mappedDots = surveyPosition.map((location, index) => {
        return <CustomDot key={index} {...{location, index}}/>
    });
    
    return (
        <div className="custom-where-container">
            <div className="dot-line">
                <div></div>
            </div>
            {mappedDots}
        </div>
    );
};

export default CustomWhere;
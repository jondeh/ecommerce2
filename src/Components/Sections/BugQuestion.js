import React, { useState, useEffect, useContext, useRef } from 'react';
import '../../SCSS/BugQuestion.scss';
import { AppContext } from '../../context/AppContext';

import ImageTile from '../Utility/ImageTile';

import { GiAnt as Ant} from 'react-icons/gi';
import { FaSpider as Spider } from 'react-icons/fa';
import { GiWaspSting as Wasp } from 'react-icons/gi';
import { sampleBugs } from '../../data/webData';

const BugQuestion = ({ surveyNum, setSurveyNum, bugAnswer, addBug }) => {
    // const { bugAnswer } = useContext(AppContext);

    useEffect(() => {
        console.log("BugQuestion suggestions", bugAnswer)
    }, [bugAnswer])


    const displayBugs = sampleBugs.map((e,i) => {
        return <ImageTile {...{thisBug: e, bugAnswer, addBug}} key={i} />
    })

    const gridStyle = {
        gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(displayBugs.length))}, 1fr)`,
        // gridTemplateRows: `repeat(${Math.ceil(Math.sqrt(displayBugs.length))}, 1fr)`,
    }

    // const handleClick = () => {
    //     setSurveyNum(surveyNum+=1)
    // }

    return (
        <div className="bug-question-grid" style={gridStyle}>
            { displayBugs }
        </div>
    );
};

export default BugQuestion;
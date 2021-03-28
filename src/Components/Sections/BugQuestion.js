import React, { useState, useEffect, useContext } from 'react';
import '../../SCSS/BugQuestion.scss';
import { AppContext } from '../../context/AppContext';

import ImageTile from '../Utility/ImageTile';

import { GiAnt as Ant} from 'react-icons/gi';
import { FaSpider as Spider } from 'react-icons/fa';
import { GiWaspSting as Wasp } from 'react-icons/gi';


const sampleBugs = [
    {bug: "ants", image: <Ant />}, 
    {bug: "spiders", image: <Spider />}, 
    {bug: "wasps", image: <Wasp />}, 
    {bug: "centipedes", image: null}, 
    {bug: "cockroaches", image: null}, 
    {bug: "scorpions", image: null}, 
    {bug: "moths", image: null}, 
    {bug: "millipedes", image: null}, 
    {bug: "silverfish", image: null}]

const BugQuestion = ({ surveyNum, setSurveyNum, bugAnswer, addBug }) => {
    // const { bugAnswer } = useContext(AppContext);

    useEffect(() => {
        console.log("BugQuestion suggestions", bugAnswer)
    }, [bugAnswer])


    const displayBugs = sampleBugs.map((e,i) => {
        return <ImageTile {...{thisBug: e, bugAnswer, addBug}} key={i} />
    })

    const gridStyle = {
        // gridTemplateColumns: `repeat(3, 1fr)`,
        // gridTemplateRows: `repeat(3, 1fr)`,
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
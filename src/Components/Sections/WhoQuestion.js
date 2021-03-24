import React, { useState, useContext, useEffect } from 'react';
import '../../SCSS/WhoQuestion.scss';
import { GiCat, GiSittingDog, GiTortoise, GiBirdHouse } from 'react-icons/gi';
import { Button } from '@material-ui/core';
import PetOption from '../Utility/PetOption';
import { CustomContext } from '../../context/CustomContext';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor, altBlue} = colors;

const WhoQuestion = ({  }) => {
    const { whoAnswer, setWhoAnswer } = useContext(CustomContext);
    
    const whoOptions = [
        {text: "dogs", image: <GiSittingDog className="dog" size={35} color={altBlue} />},
        {text: "cats", image: <GiCat className="dog" size={35} color={altBlue} />},
        {text: "reptiles", image: <GiTortoise className="dog" size={35} color={altBlue} />},
        {text: "birds", image: <GiBirdHouse className="dog" size={35} color={altBlue} />},
    ];

    const handleChildClick = (string) => {
        setWhoAnswer(string)
    };

    const handleWhoClick = (option) => {
        console.log("handleWhoClick:", option)
        setWhoAnswer([whoAnswer ? whoAnswer : null, option]);
      };

    const mappedPets = whoOptions.map((pet, i) => {
        return <PetOption {...{pet, whoAnswer, handleWhoClick}}/>
    });

    const mappedYesNo = ["yes", "no"].map((e, i) => {
        return <Button
            style={{background: whoAnswer === e ? accent : null}} 
            onClick={() => handleChildClick(e)}
            variant="contained"> {e} </Button>
    })

    // useEffect(() => {
    //     // setWhoAnswer(null)
    // }, [whoAnswer])


    return (
        <div className="who-question-container">
            <div className="child-container">
                <span>Children under 3?</span>
                <div className="yes-no-container">
                    {/* <Button
                        style={{background: isUnderThree === "yes" ? "#ACE1AF" : null}} 
                        onClick={() => handleChildClick("yes")}
                        variant="contained"> yes </Button>
                    <Button 
                        style={{background: isUnderThree === "no" ? "#ACE1AF" : null}}
                        onClick={() => handleChildClick("no")}
                        variant="contained"> no </Button> */}
                        {mappedYesNo}
                </div>
                {/* <div className="child-container">
                    <GiSittingDog className="child" size={35} color={"#B0C4DE"} />
                    <span>kids 0-3</span>
                </div>
                <div className="child-container">
                    <GiSittingDog className="child" size={35} color={"#B0C4DE"} />
                    <span>kids 4-10</span>
                </div>
                <div className="child-container">
                    <GiSittingDog className="child" size={35} color={"#B0C4DE"} />
                    <span>kids 11+</span>
                </div> */}
            </div>
            <div className="pet-grid">
                {/* <div className="pet">
                    <GiSittingDog className="dog" size={35} color={"#B0C4DE"} />
                    <span>dogs</span>
                </div>
                <div className="pet">
                    <GiCat size={35} color={"#B0C4DE"} />
                    <span>cats</span>
                </div>
                <div className="pet">
                    <GiTortoise size={35} color={"#B0C4DE"} />
                    <span>reptiles</span>
                </div>
                <div className="pet">
                    <GiBirdHouse size={35} color={"#B0C4DE"} />
                    <span>birds</span>
                </div> */}
                {mappedPets}
            </div>
            
            
            
{/*             
            <div>Dogs</div>
            <div>Cats</div>
            <div>Birds</div>
            <div>Reptiles</div> */}
        </div>
    )
}

export default WhoQuestion;
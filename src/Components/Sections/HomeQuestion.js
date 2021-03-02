import React, { useState } from 'react';

import '../../SCSS/HomeQuestion.scss';
import HomeOption from '../Utility/HomeOption';
import { Button } from '@material-ui/core';

const HomeQuestion = ({ homeAnswer, setHomeAnswer }) => {
    const [address, setAddress] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [size, setSize] = useState('');

    const homeOptions = [
        {text: "0-1000"}, 
        {text: "1000-4500"}, 
        {text: "4500+"}];

    const handleHomeClick = (option) => {
        setHomeAnswer([address, option])
    }

    return (
        <div className="home-question-container">
            <div className="home-question-address">
                <h3>What is your home address?</h3>
                <input onChange={(e) => setAddressInput(e.target.value)}></input> <Button variant="contained" onClick={() => setAddress(addressInput)}>OK</Button>
            </div>
            {
                (address || (homeAnswer && homeAnswer[0])) ? 
            <div className="home-question-size">
                <h3>Approximately how many square feet is your home-question?</h3>
                
                <div className="home-question-size-options">
                    {homeOptions.map((e,i) => {
                        return <HomeOption key={i} {...{option: i, homeAnswer: homeAnswer && homeAnswer[1], setHomeAnswer, handleHomeClick, text: e.text}}/>
                    })}
                </div>
            </div> : <div className="home-question-size"></div>
            }
        </div>
    )
}

export default HomeQuestion;
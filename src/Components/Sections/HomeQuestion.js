import React from 'react';

import '../../SCSS/HomeQuestion.scss';

const HomeQuestion = () => {
    return (
        <div className="home-question-container">
            <div className="home-question-address">
                <h3>What is your home-question address?</h3>
                <input></input>
            </div>
            <div className="home-question-size">
                <h3>Approximately how many square feet is your home-question?</h3>
                <div className="home-question-size-options">
                    <div className="option"><span>0-1000</span></div>
                    <div className="option"><span>1000-4500</span></div>
                    <div className="option"><span>4500+</span></div>
                </div>
            </div>
        </div>
    )
}

export default HomeQuestion;
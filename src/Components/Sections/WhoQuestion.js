import React from 'react';

import '../../SCSS/WhoQuestion.scss';
import { GiCat, GiSittingDog, GiTortoise, GiBirdHouse } from 'react-icons/gi';

const WhoQuestion = () => {
    return (
        <div className="who-question-container">
            <div>
                <div className="child-container">
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
                </div>
            </div>
            <div>
                <div className="dog-container">
                    <GiSittingDog className="dog" size={35} color={"#B0C4DE"} />
                    <span>dogs</span>
                </div>
                <div>
                    <GiCat size={35} color={"#B0C4DE"} />
                    <span>cats</span>
                </div>
                <div>
                    <GiTortoise size={35} color={"#B0C4DE"} />
                    <span>reptiles</span>
                </div>
                <div>
                    <GiBirdHouse size={35} color={"#B0C4DE"} />
                    <span>birds</span>
                </div>
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
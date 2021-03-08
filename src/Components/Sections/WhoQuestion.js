import React from 'react';

import '../../SCSS/WhoQuestion.scss';
import { GiCat, GiSittingDog, GiTortoise, GiBirdHouse } from 'react-icons/gi';

const WhoQuestion = () => {
    return (
        <div className="who-question-container">
            <div><GiSittingDog className="dog" size={35} color={"#B0C4DE"} /></div>
            <div><GiCat size={35} color={"#B0C4DE"} /></div>
            <div><GiTortoise size={35} color={"#B0C4DE"} /></div>
            <div><GiBirdHouse size={35} color={"#B0C4DE"} /></div>
            
            
            
{/*             
            <div>Dogs</div>
            <div>Cats</div>
            <div>Birds</div>
            <div>Reptiles</div> */}
        </div>
    )
}

export default WhoQuestion;
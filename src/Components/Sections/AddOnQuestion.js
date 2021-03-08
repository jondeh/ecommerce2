import React, { useState, useContext, useEffect } from 'react';
import '../../SCSS/EmailQuestion.scss';
import { AppContext } from '../../context/AppContext';
import { UserContext } from '../../context/UserContext';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import '../../SCSS/AddOnQuestion.scss';


const AddOnQuestion = () => {
    const { push } = useHistory();
    const { addOnQuestion, setAddOnQuestion } = useContext(AppContext);

    const handleClick = () => {
        setAddOnQuestion(false);
       push('/cart');
    }

    // console.log("emailInput", emailInput)

    return (
        <div className={`add-on-question-container-${addOnQuestion}`}>
            <span>We'll send you everything you need in your box, but if you need additional items you can select them here.  We recommend trying the box only first!</span>
            <Button 
                onClick={handleClick}
                variant="contained">OK</Button>
        </div>
    )
}

export default AddOnQuestion;
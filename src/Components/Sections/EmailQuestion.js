import React, { useState, useContext, useEffect } from 'react';
import '../../SCSS/EmailQuestion.scss';
import { AppContext } from '../../context/AppContext';
import { UserContext } from '../../context/UserContext';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { HiOutlineMailOpen } from 'react-icons/hi';
import {colors} from '../../data/variables';
const { primary, secondary, accent, textColor} = colors;


const EmailQuestion = () => {
    const { push } = useHistory();
    const { emailQuestion, setGetAnswers, setIsSurvey } = useContext(AppContext);
    const { register } = useContext(UserContext);
    const [emailInput, setEmailInput] = useState('');

    const handleClick = () => {
        if (emailInput.includes("@")) {
            register({email: emailInput, password: "password"}, "my-plan")
            // setIsSurvey(false)
            setGetAnswers(null)
            setEmailInput('')
            // push('/my-plan')
        }
    }

    // console.log("emailInput", emailInput)

    return (
        <div className={`email-question-container-${emailQuestion}`}>
            Great! We're retrieving your custom box. Put in your email so we can save your progress!
            <HiOutlineMailOpen size={85} color={accent} className="box-icon" />
            <input placeholder="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}></input>
            <Button 
                onClick={handleClick}
                variant="contained">OK</Button>
        </div>
    )
}

export default EmailQuestion;
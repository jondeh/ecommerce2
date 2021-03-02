import React, { useState, useContext } from 'react';
import '../../SCSS/EmailQuestion.scss';
import { AppContext } from '../../context/AppContext';
import { UserContext } from '../../context/UserContext';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const EmailQuestion = () => {
    const { push } = useHistory();
    const { emailQuestion, setGetAnswers, setIsSurvey } = useContext(AppContext);
    const { register } = useContext(UserContext);
    const [emailInput, setEmailInput] = useState('');

    const handleClick = () => {
        if (emailInput.includes("@")) {
            register({email: emailInput, password: "password"})
            setIsSurvey(false)
            setGetAnswers(null)
            setEmailInput('')
            push('/my-plan')
        }
    }

    return (
        <div className={`email-question-container-${emailQuestion}`}>
            Great! We're retrieving your custom box. Put in your email so we can save your progress!
            <input onChange={(e) => setEmailInput(e.target.value)}></input>
            <Button 
                onClick={handleClick}
                variant="contained">OK</Button>
        </div>
    )
}

export default EmailQuestion;
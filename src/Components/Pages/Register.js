import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import '../../SCSS/Register.scss';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const { register } = useContext(UserContext);

    const [emailInput, setEmailInput] = useState(null);
    const [passwordInput, setPasswordInput] = useState(null);

    const handleSubmit = () => {
        if (passwordInput.length > 6 && emailInput.split('').includes('@')) {
            register({email: emailInput, password: passwordInput})
        } else {
            window.alert("INVALID!")
        }
    }

    console.log(emailInput, passwordInput)

    return (
        <div className="register-container">
            <input placeholder="email" onChange={(e) => setEmailInput(e.target.value)} />
            <input placeholder="password" onChange={(e) => setPasswordInput(e.target.value)} />
            <Button onClick={handleSubmit} variant="contained">SUBMIT</Button>
        </div>
    );
};

export default Register;
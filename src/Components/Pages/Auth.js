import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import '../../SCSS/Auth.scss';
import { Button } from '@material-ui/core';


const Auth = () => {
    const { user, setUser, login } = useContext(UserContext);
    const [emailInput, setEmailInput] = useState(null);
    const [passwordInput, setPasswordInput] = useState(null);

    const handleButtonClick = () => {
        login({email: emailInput, password: passwordInput});
    };

    const handleInputChange = (type, value) => {
        switch (type) {
            case "email":
                setEmailInput(value);
            case "password":
                setPasswordInput(value);
        };
    };

    return (
        <div className="auth-container">
            <h1>sign in</h1>
            <div className="email-container">
                <h4>email address</h4>
                <input 
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="email-input"
                    placeholder="email address"
                />
            </div>
            <div className="password-container">
                <h4>password</h4>
                <input 
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="password-input"
                    placeholder="password" 
                />
            </div>
            
            <Button variant="contained">
                SUBMIT
            </Button>
            <div className="register">
                <h4>Don't have an account?</h4>
                <Button variant="contained">REGISTER HERE</Button>
            </div>
        </div>
    )
}

export default Auth;
import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { AppContext } from "../../context/AppContext";
import "../../SCSS/Auth.scss";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from '../Menus/Header';

const Auth = () => {
  const { push } = useHistory();
  const { user, setUser, login } = useContext(UserContext);
  const { webAuthVisible, setWebAuthVisible } = useContext(AppContext);
  const [emailInput, setEmailInput] = useState(null);
  const [passwordInput, setPasswordInput] = useState(null);

  const handleLogin = () => {
    login({ email: emailInput, password: passwordInput });
  };

  const handleInputChange = (type, value) => {
    switch (type) {
      case "email":
        setEmailInput(value);
      case "password":
        setPasswordInput(value);
    }
  };

  const handleRegister = () => {
    push("/customize");
  };

  // const handleOffClick = () => {
  //   if (webAuthVisible) {
  //     setWebAuthVisible(false);
  //   };
  // };

  return (
    <div 
      // onClick={handleOffClick}
      className="auth-container">
      {/* <Header /> */}
      <div className="auth-box">
        <h3>sign in</h3>
        <div className="email-container">
          <h4>email</h4>
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

        <Button onClick={handleLogin} variant="contained">
          submit
        </Button>
        <div className="register">
          <h4>Don't have an account?</h4>
          <Button onClick={handleRegister} variant="contained">
            get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

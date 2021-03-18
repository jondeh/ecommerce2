import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../../SCSS/WebMenu.scss";
import { positions, withStyles } from "@material-ui/core";
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import {IoMdArrowDropdown} from 'react-icons/io';

const WebMenu = ({ user }) => {
  const { logout } = useContext(UserContext);
  const { push } = useHistory();

  return (
    <div className="web-menu">
      <Button variant="contained">button</Button>
      <Button variant="contained">button</Button>
      <Button variant="contained">button</Button>
      <Button variant="contained">button</Button>
    </div>
  );
};

export default WebMenu;

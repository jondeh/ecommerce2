import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../../SCSS/WebMenu.scss";
import { positions, withStyles } from "@material-ui/core";
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import {IoMdArrowDropdown} from 'react-icons/io';

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    borderRadius: "15px",
    // background: "#ACE1AF", // celadon
    background: "white", 
    boxShadow: ".5px .7px 4px grey",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      // backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
    fontFamily: "Raleway",
    // color: "#ACE1AF", // celadon
    color: "darkslategrey",
    // border: '1px solid #ACE1AF'
  },
}))(MenuItem);

const MenuDemo = ({ user }) => {
  const { logout } = useContext(UserContext);
  const [anchorEl, open] = useState(null);
  const { push } = useHistory();

  const handleClick = (event) => {
    open(event.currentTarget);
  };

  // const classes = useStyles();

  const handleClose = () => {
    open(null);
  };

  const handleMyPlan = () => {
    open(null);
    push('/my-plan');
  }

  const handleLogout = () => {
    open(null);
    logout();
  };

  return (
    <div className="web-menu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        // onMouseOut={handleClose}
      >
        {user.email}
        <IoMdArrowDropdown />
      </Button>
      <StyledMenu
        // className={classes.root}
        // style={{ marginTop: "40px" }}
        // position="right"
        id="Menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleMyPlan}>
          {user ? "my plan" : "get started"}
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>account</StyledMenuItem>
        <StyledMenuItem onClick={handleLogout}>sign out</StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default MenuDemo;

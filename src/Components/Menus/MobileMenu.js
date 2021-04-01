import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import Auth from "../Pages/Auth";

import "../../SCSS/MobileMenu.scss";
import Header from "./Header";
import MMTop from "./MMTop";
import MMMiddle from "./MMMiddle";
import MMBottom from "./MMBottom";
import FooterHeader from "./FooterHeader";
import WebMenu from "./WebMenu";

import { GiHummingbird, GiArchiveResearch } from "react-icons/gi";
import { BiPackage } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

import { colors } from "../../data/variables";
const { primary, secondary, accent, textColor, altBlue } = colors;

const MobileMenu = () => {
  let id = "mm-menu";
  const { push } = useHistory();
  const { mobileMenuVisible, mobileAuthVisible } = useContext(AppContext);
  const { user } = useContext(UserContext);

  const webNavStyle = {
    width: "125%",
  };

  const handleLeave = () => {
    let webMenu = document.getElementById(id);
    webMenu.classList.remove("open");
  };

  const handleSeeHowItWorks = () => {
    handleLeave();
    push("/how-to");
  };
  const handleProducts = () => {
    handleLeave();
  };
  const handleGetStarted = () => {
    handleLeave();
    push("/customize");
  };
  const handleReviews = () => {
    handleLeave();
  };

  const webNavData = [
    {
      text: "get started",
      subText: "customize my plan",
      onClick: handleGetStarted,
      image: <GiHummingbird color={accent} />,
    },
    {
      text: "see how it works",
      subText: "why Jitterbox?",
      onClick: handleSeeHowItWorks,
      image: <GiArchiveResearch color={accent} />,
    },
    {
      text: "products",
      subText: "see all our products",
      onClick: handleProducts,
      image: <BiPackage color={accent} />,
    },
    {
      text: "reviews",
      subText: "don't take our word for it",
      onClick: handleReviews,
      image: <AiFillStar color={"gold"} />,
    },
  ];

  // console.log(mobileMenuVisible)

  return (
    <div id="mobile-menu" className="mobile-menu">
      <Header {...{ mobile: true }} />
      {/* <div className="mobile-menu-body">
                {
                    mobileAuthVisible ? <Auth /> : 
                    <div className="body2">
                        <div>Hello</div>
                        <MMBottom {...{user}} />
                    </div>
                }   
                <Auth {...{mobile: true, id}}/>
                <div id="mmbody" className="body2">
                    <MMBottom {...{user}} />
                </div>
            </div> */}

      {/* {
                mobileAuthVisible ? <Auth /> :  */}
      <>
        {/* <MMTop /> */}
        {/* <WebMenu {...{ id, data: webNavData, style: webNavStyle }} /> */}
        <MMMiddle />
        <MMBottom {...{ user }} />
      </>
      {/* } */}
      {/* <Auth /> */}
      <FooterHeader {...{ mobile: true }} />
    </div>
  );
};

export default MobileMenu;

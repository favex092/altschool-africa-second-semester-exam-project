import React from "react";
import { Link } from "react-router-dom";

// Onboarding Picture
import onBoarding from "../assets/onboarding-2.gif";

const OnBoarding = () => {
  return (
    <div className="screen-container">
      <>
        <img className="image" src={onBoarding} alt="onboarding" />
        <h4 className="title">LET'S SHARE THE EXPERIENCE </h4>
        <br />
        <p className="description">
            Hey Welcome!!! <br/> We are delighted to have you here. I would like to extend our warmest welcome and good wishes!
        </p>
        <br />
        <Link to="profile">
          <button className="button">Start now</button>
        </Link>
      </>
    </div>
  );
};

export default OnBoarding;
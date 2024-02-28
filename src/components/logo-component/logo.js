import React from "react";
import beachImg from "./imgs/beach.png";
import bagImg from "./imgs/bag.png";
import "./logoStyle.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={beachImg} alt="beach" />
      <h1>FAR AWAY</h1>
      <img src={bagImg} alt="bag" />
    </div>
  );
};

export default Logo;

import React from "react";
import style from "./style.module.css";

export const Footer = () => {
  return (
    <div className={style.Footer}>
      <span>Narek Chakhoyan</span>
      <a target = "_blank" href = "https://github.com/Narek-19">
        <img src= "./images/github.png"/>
      </a>
      
    </div>
  );
};

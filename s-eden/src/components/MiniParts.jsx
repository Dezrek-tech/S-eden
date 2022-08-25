import AppConfig from "./AppConfig.jsx";
import Pattern from "../assets/images/pattern.png";
import { useState } from "react";

export const BgPattern = () => {
    return (  
      <img src={Pattern} alt="pattern" className="bg-pattern" />
    )
}

export const AppLogo = () => {
  return (
    <div className="app__logo flat-centered">
      <img className="image" src="" alt="" />
      <span className="text">{AppConfig.app_name}</span>
    </div>
  );
};

export const AppButton = (props) => {
  return (
    <button className="app__button flat-centered" onClick={props.onclick}>
      {props.children}
    </button>
  );
};

export const AppTitle = (props) => {
  return (
    <h2 className="app__title">
      <span className="text">
        {props.text}
        <span className="underline">
            <i className="main"></i>
            <i className="sub"></i>
        </span>
        </span>
      <span className="icon">{props.icon}</span>
    </h2>
  );
};

export const AppCard = (props) => {
    return (
        <div className="card">
            <div className="image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="info flat-centered">
                <p className="title">{props.title}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

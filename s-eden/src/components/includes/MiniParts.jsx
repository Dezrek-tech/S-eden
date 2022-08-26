import AppConfig from "./AppConfig.jsx";
import Pattern from "../../assets/images/pattern.png";
import { useState } from "react";
import "smooth-scroll"

export const BgPattern = () => {
  return <img src={Pattern} alt="pattern" className="bg-pattern" />;
};

export const AppLogo = () => {
  return (
    <div className="app__logo flat-centered">
      <img className="image" src="./images/logo-image.png" alt="" />
      <span className="text">{AppConfig.app_name}</span>
    </div>
  );
};

export const NavItem = (props) => {
  return (
    <a data-scroll className="item" href={`#${props.itemKey}`}>
      {props.children}
    </a>
  )
}

export const AppButton = (props) => {
  return (
    <a className="button_wrapper" href={props.url || "#"}>
      <button className="app__button flat-centered" onClick={props.onclick}>
        {props.children}
      </button>
    </a>
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
  );
};

export const SocialItem = (props) => {
  return (
    <a className="item flat-centered" href={props.url || "#"}>
      <span className="icon">
        <i className={props.icon}></i>
      </span>
      <span className="text">{props.handle || props.icon}</span>
    </a>
  );
};

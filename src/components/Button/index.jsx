import React from "react";
import "./index.scss";

const Button = (props) => {
  return (
      <>
    <button
      onClick={props?.callback}
      type={props?.submit ? "submit" : "button"}
      className={`btn${props?.type ? " " + props.type : ""}${
        props?.className ? " " + props.className : ""
      }`}
      style={props?.style}
    >
      {props?.label ? props.label : "BUTTON"}
    </button>
    </>
  );
};

export default Button;

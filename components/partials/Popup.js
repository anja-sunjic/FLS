import React from "react";
//import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
export default function Popup(props) {
  return (
    <>
      <div className={`_popup ${props.open ? "open" : ""}`}>
        <div className="_popup-bg" onClick={props.closePopup}></div>

        <div className="_popup-inner">{props.children}</div>
      </div>
    </>
  );
}

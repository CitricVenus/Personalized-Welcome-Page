import React from "react";
import "./Welcome.css";

function Welcome({ name, location }) {
  return (
    <div className="">
      <div></div>
      <p> Hello, </p>
      <p className="prop">{name}</p>
      <p> from </p>
      <p className="prop"> {location}</p>
    </div>
  );
}
export default Welcome;

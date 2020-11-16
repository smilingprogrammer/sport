import React from "react";
import Animator from "./Animation/Animator";

const HomePage = () => {
  return (
    <div className="section">
      <img src="logo.png" alt="sportee" className="logo" />
      <Animator />
      <div className="text">
        <h1 className="header">Book A Ticket Now</h1>
        <h5 className="subheader">
          I am that friend that can get you into any sports event you ever want
          to go to. <br /> I am also a good talker.
          <br /> It begins with a simple <b>'Hi'</b>
        </h5>
      </div>
    </div>
  );
};

export default HomePage;

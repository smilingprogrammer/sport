import React from "react";
import Lottie from "react-lottie";
import LoadingData from "./10244-balls-bounce.json";

const Animator = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    playbackSpeed: 2,
    animationData: LoadingData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loader-container">
      <div className="loader">
        <Lottie options={defaultOptions} height={250} width={250} />
      </div>
    </div>
  );
};

export default Animator;

import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";
const Qzones = () => {
  return (
    <div>
      {" "}
      <h2 className="text-xl font-bold mb-5">Q-Zone</h2>
      <div className="bg-base-200 p-2 flex items-center justify-center flex-col">
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playgroundImg} alt="" />
      </div>
    </div>
  );
};

export default Qzones;

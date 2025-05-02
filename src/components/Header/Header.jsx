import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-7 gap-2.5">
      <img src={logo} alt="logo" />
      <p className="text-lg text-accent">Journalism Without Fear or Favours</p>
      <p className="font-medium text-xl text-accent">
        {format(new Date(), "EEEE , MMMM dd, yyyy")}{" "}
      </p>
    </div>
  );
};

export default Header;

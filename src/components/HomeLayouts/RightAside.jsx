import React, { use } from "react";
import LoginButtons from "../LoginButtons";
import SocialButtons from "../SocialButtons";
import Qzones from "./Qzones";
import { AuthContext } from "../../AuthContext/AuthContext";

const RightAside = () => {
  const { user } = use(AuthContext);
  return (
    <div className="space-y-10">
      {user ? "" : <LoginButtons />}
      <SocialButtons />
      <Qzones />
    </div>
  );
};

export default RightAside;

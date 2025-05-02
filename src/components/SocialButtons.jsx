import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const SocialButtons = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Find us on</h2>
      <div className="join join-vertical w-full items-start">
        <button className="btn w-full justify-start text-base font-medium py-3 join-item bg-base-100 text-start">
          <FaFacebook />
          Facebook
        </button>
        <button className="btn w-full justify-start text-base font-medium py-3 join-item bg-base-100 text-start">
          <FaTwitter />
          Twitter
        </button>
        <button className="btn w-full justify-start text-base font-medium py-3 join-item bg-base-100 text-start">
          <FaInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default SocialButtons;

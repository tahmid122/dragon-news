import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userPng from "../assets/user.png";
import { AuthContext } from "../AuthContext/AuthContext";
const NavBar = () => {
  const { user, userSignOut } = use(AuthContext);
  const handleLogout = () => {
    userSignOut()
      .then(() => alert("Sign out successfully"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex items-center justify-between gap-5">
      <div></div>
      <div className="flex gap-5 text-accent text-center mx-auto items-center justify-end">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
        {user ? (
          ""
        ) : (
          <>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
          </>
        )}
      </div>
      <div className="flex items-center gap-5">
        {user?.photoURL ? (
          <img
            className="w-10 h-10 rounded-full"
            referrerPolicy="no-referrer"
            src={user.photoURL}
            alt=""
          />
        ) : (
          <img src={userPng} alt="" />
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary px-10 rounded-none py-0"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/login"}
            className="btn btn-primary px-10 rounded-none py-0"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;

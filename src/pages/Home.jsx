import React from "react";
import { Navigate, useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  if (pathname == "/") {
    return <Navigate to={"/category/1"}></Navigate>;
  }

  return <div>Home</div>;
};

export default Home;

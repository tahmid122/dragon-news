import React, { use } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftAside from "../components/HomeLayouts/LeftAside";
import RightAside from "../components/HomeLayouts/RightAside";
import { AuthContext } from "../AuthContext/AuthContext";

const HomeLayout = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <NavBar />
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-6 w-11/12 mx-auto my-15">
        <aside className="left-nav col-span-3 ">
          <LeftAside />
        </aside>
        <section className="main-content col-span-6">
          <Outlet />
        </section>
        <aside className="right-nav col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;

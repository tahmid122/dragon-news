import React from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftAside from "../components/HomeLayouts/LeftAside";
import RightAside from "../components/HomeLayouts/RightAside";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const news = useLoaderData();
  const { state } = useNavigation();
  return (
    <div>
      {import.meta.env.VITE_name}
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews news={news} />
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <NavBar />
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-6 w-11/12 mx-auto my-15 relative">
        <aside className="left-nav col-span-3 h-fit sticky top-2">
          <LeftAside />
        </aside>
        <section className="main-content col-span-6">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="right-nav col-span-3 h-fit sticky top-2">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;

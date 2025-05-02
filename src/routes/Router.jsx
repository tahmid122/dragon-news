import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../components/Login";
import Register from "../components/Register";
import NewsDetails from "../components/NewsDetails";
import ProtectedRoute from "./ProtectedRoute";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        Component: CategoryNews,
        hydrateFallbackElement: (
          <span className="loading loading-dots loading-xl"></span>
        ),
        // eslint-disable-next-line no-dupe-keys
        hydrateFallbackElement: <Loading />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "news/:id",
    element: (
      <ProtectedRoute>
        <NewsDetails />
      </ProtectedRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/auth",
    element: <h2>Auth layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

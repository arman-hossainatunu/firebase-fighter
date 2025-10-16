import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Profile from "../Pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/signin",
        element: <h1>Signin</h1>,
      },
      {
        path: "/signup",
        element: <h1>Signup</h1>,
      },
    ],
  },
]);

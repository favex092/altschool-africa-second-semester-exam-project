import React from "react";
import ReactDOM from "react-dom/client";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components / Pages
import Onboarding from "./pages/onBoarding";
import Profile from "./pages/profile/profile";
import Repository from "./pages/profile/repository";
import SingleRepository from "./pages/profile/singlerepos";

// CSS
import "./index.css";
import "./style/overall.scss";


const root = ReactDOM.createRoot(document.getElementById("root"));

const IndexPage = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Onboarding />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/profile/repos",
      element: <Repository />,
    },
    {
      path: "/profile/repos/:id",
      element: <SingleRepository />,
    },
  ]);
  return <RouterProvider router={router} />;
};

root.render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>
);
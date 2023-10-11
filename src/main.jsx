import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import { About } from "./components/About.jsx";
import Project from "./components/Project.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/project",
  //   element: <Project/>,
  // },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./component/Home.jsx";
import Service from "./component/service.jsx";
import Contact from "./component/Contact.jsx";
import About from "./component/About.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service/sub-service",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/mama",
    element: <Service />,
    children: [
      {
        path: "/mama",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import JavaScript from "./pages/javascript";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/html",
    element: <Html />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/css",
    element: <Css />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
  {
    path: "/javascript",
    element: <JavaScript />,
    errorElement: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
serviceWorkerRegistration.register();

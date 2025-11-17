import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

import { HeadProvider } from "react-head";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HeadProvider>
    <RouterProvider router={router} />
  </HeadProvider>
);

import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    }
  ])

  return <RouterProvider router={router} />
}

export default Router;

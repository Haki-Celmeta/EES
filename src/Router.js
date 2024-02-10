import React from "react";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ViewCart from "./pages/ViewCart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/process",
      element: <Process />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/shop/:name",
      element: <Product />
    },
    {
      path: "/cart",
      element: <ViewCart />
    }
  ])

  return <RouterProvider router={router} />
}

export default Router;

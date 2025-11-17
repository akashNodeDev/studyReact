import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import ResturantMenu from "./src/components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

/**
 * Swiggy Like Website Structure
 /** 
  * Headers
  *   - Logo
  *   - Nav Items
  *   - Cart
  * 
  * Body
  *   - Search
  *   - Resturant Container
  *       - Resturant Card
  *           - Image
  *           - Res Name,Cusines,Star Rating,Delivery Time etc.
  * 
  * Footer
  *   - Links
  *   - Address
  *   - Contact
  * 
  */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);

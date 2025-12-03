import React, { useState, lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
//import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import ResturantMenu from "./src/components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./src/utils/UserContext";
//import Grocerry from "./src/components/Grocerry";

const Grocerry = lazy(() => import("./src/components/Grocerry"));

const About = lazy(() => import("./src/components/About"));
// In the recent react-router lazy loading suspense is handling by default.
// If you don't want a fallback screen then no need to use suspense
/**
 * Different ames of the lazy loading
 * 1. Chunking
 * 2. Code Splitting
 * 3. Dynamic Building
 * 4. On demand loading
 * 5. Dynamic import
 */

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
  const [userName, setUserName] = useState();
  // authenticate
  useEffect(() => {
    // Make API call send username and password
    const data = {
      name: "Akash Agrawal",
    };
    setUserName(data.name);
  }, []);
  return (
    /*Here we are providing the value of the context to whole application*/
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
        path: "/grocerry",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocerry />
          </Suspense>
        ),
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

 
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet, Outlet } from "react-router-dom"; // install onluy  npm install react-router-dom@6.12.1 or you will det error 

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component


// create a router- it is a array list of path


const AppLayout = () => {
  return (
    <>
      <Header />
      
      <Outlet/>
      <Footer />
    </>
  );
};


const appRouter= createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path:"/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },{
        path:"/restaurant/:id",
        element: <RestaurantMenu/>
      }
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

 

root.render(<RouterProvider router={appRouter}/>);     
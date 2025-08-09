import { useState } from "react";
import "./App.css";
import { Home, NotFound, Services, AboutUs, ContactUs } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "aboutus", element: <AboutUs /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Home, NotFound, Services, AboutUs, ContactUs } from "./pages";
import {
  createBrowserRouter,
  CreateBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  {path:'/contactus', element:<ContactUs/>}
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

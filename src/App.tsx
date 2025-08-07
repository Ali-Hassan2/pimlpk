import { useState } from "react";
import "./App.css";
import { Home, NotFound, Services } from "./pages";
import {
  createBrowserRouter,
  CreateBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "*", element: <NotFound /> },
]);

function App() {

  return (
    <div>
      <RouterProvider
    </div>
  )
}

export default App;

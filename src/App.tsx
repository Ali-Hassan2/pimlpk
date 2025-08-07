import { useState } from "react";
import "./App.css";
import { Home, Services } from "./pages";
import {
  createBrowserRouter,
  CreateBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
]);

function App() {}

export default App;

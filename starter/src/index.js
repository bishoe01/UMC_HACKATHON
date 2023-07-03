import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      { index: true, path: "/", element: <Main /> },
      { path: "/about", element: <h1>About</h1> },
      { path: "/profile", element: <Profile /> },
      { path: "/Home", element: <Home /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

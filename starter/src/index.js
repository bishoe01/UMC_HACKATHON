import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import Vote from "./pages/Vote";
import TeamPage from "./pages/TeamPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      { index: true, path: "/", element: <Main /> },
      { path: "/about", element: <h1>About</h1> },
      { path: "/profile", element: <Profile /> },
      { path: "/home", element: <Home /> },
      { path: "/vote", element: <Vote /> },
      { path: "/team/:team", element: <TeamPage /> },

    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import Vote from "./pages/Vote";

>>>>>>> d573039d296feba4df88bdac48c0e46afa1198c2

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
<<<<<<< HEAD
      { index: true, path: '/', element: <Home /> },
      { path: '/about', element: <h1>About</h1> },
      { path: '/profile', element: <Profile /> },
      { path: '/register', element: <Register /> }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
=======
      { index: true, path: "/", element: <Main /> },
      { path: "/about", element: <h1>About</h1> },
      { path: "/profile", element: <Profile /> },
      { path: "/home", element: <Home /> },
      { path: "/vote", element: <Vote /> },
>>>>>>> d573039d296feba4df88bdac48c0e46afa1198c2

    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

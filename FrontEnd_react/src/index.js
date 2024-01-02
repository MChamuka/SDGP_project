import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './pages/signUp.js';


import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/signUp",
        element: <SignUp /> ,
      },
  ]);

ReactDOM.render( <RouterProvider router={router} />, document.getElementById('root'))


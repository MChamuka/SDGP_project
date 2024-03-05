import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './pages/signUp.js';
import Location from './pages/Location.js';
import Form  from './pages/Form.js';
import Profile from './pages/Profile.js';


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
        path: "signUp",
        element: <SignUp /> ,
      },
      {
        path: "Form",
        element: <Form /> ,
      },
      {
        path: "profile",
        element: <Profile /> ,
      },
      {
        path: "location",
        element: <Location /> ,
      },
  ]);

ReactDOM.render( <RouterProvider router={router} />, document.getElementById('root'))


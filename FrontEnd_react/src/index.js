
import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './pages/signUp.js';
import Locations from './pages/Locations.js';
import MovieForm from './pages/UserProfilePage/UserProfileComponents/Feaatures/DataGatheringFormFeature/MovieForm.js';
import Profile from "./pages/UserProfilePage/Profile.js";


import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        element: <MovieForm /> ,
      },
      {
        path: "profile",
        element: <Profile /> ,
      },
      {
        path: "locations",
        element: <Locations /> ,
      },
  ]);

ReactDOM.render( <RouterProvider router={router} />, document.getElementById('root'))

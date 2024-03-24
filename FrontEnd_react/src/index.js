import React from 'react';
import ReactDOM from 'react-dom';

import SignUp from './Signup_sign in/Signup/index.jsx';
import Login from './Signup_sign in/Login/index.jsx';
import Journal from './pages/UserProfilePage/UserProfileComponents/Feaatures/JournalFeature/Journal.js';
import Locations from './pages/Locations.js';
import MovieForm from './pages/UserProfilePage/UserProfileComponents/Feaatures/DataGatheringFormFeature/MovieForm.js';


import Profile from './pages/UserProfilePage/Profile.js';
import JetSource from './pages/jetSource.js'
import "./index.css";


import App from './App';
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "signUp",
        element: <SignUp /> ,
      },
      { path: "login",
        element: <Login/>
    },
      {
        path: "form",
        element: <MovieForm /> ,
      },
      {
        path: "/profile",
        element: <Profile /> ,
      },
      {
        path: "locations",
        element: <Locations /> ,
      },
      {

      path:"Login",
      element:<Login/>
      },
      {
        path: "jetsource",
        element: <JetSource /> ,

      },
      {
        path: "/Journal",
        element: <Journal />,
      },
  ]);

ReactDOM.render( <RouterProvider router={router} />, document.getElementById('root'))




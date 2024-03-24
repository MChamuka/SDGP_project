import React from 'react';
import ReactDOM from 'react-dom';
import Locations from './pages/Locations.js';
import MovieForm from './pages/UserProfilePage/UserProfileComponents/Feaatures/DataGatheringFormFeature/MovieForm.js';
import SignUp from './Signup_sign in/Signup/index.jsx';
import Login from './Signup_sign in/Login/index.jsx'
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
        path: "jetsource",
        element: <JetSource /> ,
      },
  ]);

ReactDOM.render( <RouterProvider router={router} />, document.getElementById('root'))




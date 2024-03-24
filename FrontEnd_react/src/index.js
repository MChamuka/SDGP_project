import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './Signup_sign in/Signup/index.jsx';
import Login from './Signup_sign in/Login/index.jsx';
import Locations from './pages/Locations.js';
import MovieForm from './pages/UserProfilePage/UserProfileComponents/Feaatures/DataGatheringFormFeature/MovieForm.js';
import Form  from './pages/Form.js';
import Profile from './pages/UserProfilePage/Profile.js';
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
      {
        path: "Form",
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
  ]);

ReactDOM.render( <RouterProvider router={router} />, document.getElementById('root'))




import React, { useState, useRef,useEffect } from "react";
import "./userInformation.css";
import { Link } from "react-router-dom";
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css'


export default function UserInformation() {
  const [profileImage, setProfileImage] = useState("/Images/1.jpg");
  const fileInputRef = useRef(null);

  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/getUsers')
    .then(users=> setUsers(users.data))
    .catch(err=>console.log(err))
  },[])

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setProfileImage(imageURL);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mainBody">
      <div className="w-100 vh-100d-flex justify-content-cter align-items-center">
        <table className="table">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                email
              </th>
              <th>
                age
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user=>{
                <tr key={user.id}>
                  <td> {user.name} </td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      <div className="userProfileContainer">
        <div className="userDetailsContainer">
          <div className="imageContainer">
            <img src={profileImage} alt="" className="profileImage" />
            <button className="addPicButton" onClick={handleButtonClick}>
              Add New Pic
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
          <div className="userinfo">User' username</div>
          <div className="userinfo">Users' email</div>
        </div>
        <div className="featureContainer">
          <div className="userProfilefeatures">
            <button className="feature">Recommended Movies</button>
            <button className="feature">Data Gathering Form</button>
            <button className="feature">Journal</button>
            <button className="feature">Achievements</button>
          </div>
        </div>
      </div>
    </div>
  );
}

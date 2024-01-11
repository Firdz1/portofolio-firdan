import React from "react";
import "../css/Profile.css";
import profileImage from "../Img/pfl.jpg";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <h2 className="profile-text">Moch Firdan Adiputra</h2>
    </div>
  );
}

export default Profile;

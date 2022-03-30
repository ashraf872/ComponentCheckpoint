import React from 'react'
import profilePhoto from './ashraf.png';
import  './ProfilePhoto.css';

const ProfilePhoto = () => {
  return (
    <div>

         <img  className ="rounded"src={profilePhoto} alt="ProfilePhoto" /> 

    </div>
  )
}
export default ProfilePhoto;
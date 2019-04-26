import React, { useState } from 'react';
import { Client } from "../../../Client";
import './MyProfile.css';

function MyProfile() {

  const [profile, setProfile] = useState({});

  Client.receivedNewUser(data => setProfile({ name: data.user.name, profilePic: data.user.profilePic, id: data.user.idUser }));
  Client.receiveDisconnection(data => {
    if (profile.id === data.user.idUser) {
      setProfile({})
    }
  })

  return (
    <div className='MyProfile'>
      <img src={profile.profilePic} alt=''/>
      <h2>{profile.name}</h2>
    </div>
  )
}

export default MyProfile;
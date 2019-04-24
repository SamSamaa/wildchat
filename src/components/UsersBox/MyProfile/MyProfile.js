import React, { useState } from 'react';
import { Client } from "../../../Client";
import './MyProfile.css';

function MyProfile() {

  const [profile, setProfile] = useState({});

  Client.receivedNewUser(data => setProfile({ name: data.user.name, profilPic: data.user.profilPic, id: data.user.id }));
  Client.receiveDisconnection(data => {
    if (profile.id === data.user) {
      setProfile({})
    }
  })

  return (
    <div className='MyProfile'>
      <img src={profile.profilPic} alt=''/>
      <h2>{profile.name}</h2>
    </div>
  )
}

export default MyProfile;
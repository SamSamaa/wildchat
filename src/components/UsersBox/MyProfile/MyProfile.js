import React, { useState } from 'react';
import { Client } from "../../../Client";
import './MyProfile.css'

function MyProfile() {

  const [profile, setProfile] = useState('');

  //client method to set user id
  Client.receivedNewUser(data => setProfile(data.id));

  return (
    <div className='MyProfile'>
      <h2>{profile}</h2>
    </div>
  )
}

export default MyProfile;
import React, { useState } from 'react';
import { Client } from "../../../Client";
import './MyProfile.css'

function MyProfile() {

  const [profile, setProfile] = useState('');

  Client.receivedNewUser(data => setProfile(data.user.name));

  return (
    <div className='MyProfile'>
      <h2>{profile}</h2>
    </div>
  )
}

export default MyProfile;
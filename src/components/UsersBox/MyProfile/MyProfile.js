import React, { useState, useEffect } from 'react';
import { Client } from "../../../Client";
import './MyProfile.css'

function MyProfile() {

  const [profile, setProfile] = useState('');

  Client.receivedNewUser(data => setProfile(data.name));
  console.log(profile);

  return (
    <div className='MyProfile'>
      <h2>{profile}</h2>
    </div>
  )
}

export default MyProfile;
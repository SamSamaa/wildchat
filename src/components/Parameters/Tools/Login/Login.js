import React, { useState, useEffect, useContext } from 'react';
import { ConnectedCtx } from '../../../../App';
import GoogleLogin from 'react-google-login';
import { Icon, Modal } from 'semantic-ui-react';
import { Client } from '../../../../Client';
import './Login.css';

function Login(props) {
  const [open, setOpen] = useState(false);
  const [dimmer, setDimmer] = useState(true);
  const [connected, setConnected] = useContext(ConnectedCtx);
  const [user, setUser] = useState('');
  let newGoogleUser = {};

  const show = () => {
    setOpen(true);
    setDimmer('blurring');
  };

  const responseGoogle = (response) => {
    newGoogleUser = {
      username: response.profileObj.givenName + ' ' + response.profileObj.familyName,
      profilePic: response.profileObj.imageUrl
    };
    if (!localStorage.getItem('id_token') || localStorage.getItem('id_token') !== response.tokenId) {
      localStorage.setItem('id_token', response.tokenId);
      Client.sendGoogleUser(newGoogleUser);
      response && setConnected(true);
      setOpen(false);
      setDimmer(true);
    } else {
      console.log('same user');
    };
  }

  Client.receivedNewUser(data => setUser(data.user));

  const disconnectGoogle = () => {
    localStorage.removeItem('id_token');
    Client.sendDisconnection(user);
    setConnected(false);
    show();
  }

  useEffect(() => {
    props.isConnected(connected);
  }, [connected])

  useEffect(() => {
    show();
  }, [])

  return (
    <div>
      <div className='Login'>
        {connected ?
          <Icon className='iconHover' onClick={disconnectGoogle} name='sign-out' size='big' />
          : <Icon className='iconHover' onClick={show} name='sign-in' size='big' />}
      </div>
      <div className="modalConnection">
        <Modal size='tiny' dimmer={dimmer} open={open} className='loginMenu'>
          <Modal.Content>
            <p className="welcome">Bienvenue sur Wild Chat !</p>
            <p className="infoConnection">Pour participer à la discussion,<br/>connecte-toi avec ton compte Google. </p>
            <div className="googleConnection">
            <GoogleLogin
              clientId="543165394107-pun2i8uuha0cmat6n5bq8qtc87njp5vu.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={(err) => console.log(err)}
            />
            </div>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  )
}

export default Login;
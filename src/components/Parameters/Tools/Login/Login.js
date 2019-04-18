import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Icon, Modal } from 'semantic-ui-react';
import { Client } from '../../../../Client';

function Login() {
  const [open, setOpen] = useState(false);
  const [dimmer, setDimmer] = useState(true);
  const [connected, setConnected] = useState(false);
  const [user, setUser] = useState('');
  let username = '';

  const show = () => {
    setConnected(true);
    setOpen(true);
    setDimmer('blurring');
  };

  const close = () => {
    setOpen(false);
    setDimmer(true);
  };

  const responseGoogle = (response) => {
    console.log(response)
    username = response.profileObj.givenName + ' ' + response.profileObj.familyName
    //chemin pour acceder à l'icone: response.profileObj.imageURL
    if (!localStorage.getItem('id_token') || localStorage.getItem('id_token') !== response.tokenId) {
      localStorage.setItem('id_token', response.tokenId);
      Client.sendUsername(username);
    } else {
      console.log('same user')
    };
  }

  Client.receivedNewUser(data => setUser(data.user.id));
  
  const disconnectGoogle = () => {
    localStorage.removeItem('id_token');
    Client.sendDisconnection(user);
    
  }

  return (
    <div className='Login'>
      {connected ?
        <Icon className='iconHover' onClick={disconnectGoogle} name='sign-out' size='big' />
        : <Icon className='iconHover' onClick={show} name='sign-in' size='big' />}

      <Modal size='tiny' dimmer={dimmer} open={open} onClose={close} className='modalMenu'>
        <Modal.Content>
          <GoogleLogin
            clientId="543165394107-pun2i8uuha0cmat6n5bq8qtc87njp5vu.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={(err) => console.log(err)}
          />
        </Modal.Content>
      </Modal>

    </div>
  );
}

export default Login;


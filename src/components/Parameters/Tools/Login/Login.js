import React, { useState, useEffect, useContext } from 'react';
import { ConnectedCtx } from '../../../../App';
import GoogleLogin from 'react-google-login';
import { Icon, Modal } from 'semantic-ui-react';
import { Client } from '../../../../Client';

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

  const close = () => {
    setOpen(false);
    setDimmer(true);
  };

  const responseGoogle = (response) => {
    newGoogleUser = {
      username: response.profileObj.givenName + ' ' + response.profileObj.familyName,
      profilPic: response.profileObj.imageUrl
    }
    if (!localStorage.getItem('id_token') || localStorage.getItem('id_token') !== response.tokenId) {
      localStorage.setItem('id_token', response.tokenId);
      Client.sendGoogleUser(newGoogleUser);
      response && setConnected(true);
      close();
    } else {
      console.log('same user')
    };
  }

  Client.receivedNewUser(data => setUser(data.user.id));

  const disconnectGoogle = () => {
    localStorage.removeItem('id_token');
    Client.sendDisconnection(user);
    setConnected(false);
  }

  useEffect(() => {
    props.isConnected(connected);
  }, [connected])

  return (
    <div className='Login'>
      {console.log(connected + 'context login')}
        {connected ?
          <Icon className='iconHover' onClick={disconnectGoogle} name='sign-out' size='big' />
          : <Icon className='iconHover' onClick={show} name='sign-in' size='big' />}

        <Modal size='tiny' dimmer={dimmer} open={open} onClose={close} closeIcon className='modalMenu'>
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
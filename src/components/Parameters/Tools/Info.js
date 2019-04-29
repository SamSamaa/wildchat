import React, { useState } from 'react';
import { Icon, Modal } from 'semantic-ui-react';
import '../Parameters.css';

function Info() {

  const [open, setOpen] = useState(false);
  const [dimmer, setDimmer] = useState(true);

  const show = () => {
    setOpen(true);
    setDimmer('blurring');
  }

  const close = () => {
    setOpen(false);
    setDimmer(true);
  }

  return (
    <div>
      <Icon className='iconHover' onClick={show} name='info circle' size='big' />
      <Modal dimmer={dimmer} open={open} onClose={close} closeIcon className='modalMenu'>
        <Modal.Header>Informations</Modal.Header>
        <Modal.Description>
        <p>Application faite par:</p>
          <ul>
            <li>Aurélia Roumesy</li>
            <li>Béatrice de Montbeillard</li>
            <li>Sam Adib Ghiassi</li>
            <li>Julien Duhem</li>
          </ul>
        </Modal.Description>
      </Modal>
    </div>
  )
}

export default Info;
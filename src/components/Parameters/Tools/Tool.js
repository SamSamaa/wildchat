import React, { useState } from 'react';
import { Icon, Modal } from 'semantic-ui-react';
import CheckboxOption from './Option/CheckboxOption';
import '../Parameters.css';

function Tool() {
  
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
      <Icon className='iconHover' onClick={show} name='cog' size='big' />
      <Modal size='tiny' dimmer={dimmer} open={open} onClose={close} closeIcon className='modalMenu'>
        <Modal.Header>Options</Modal.Header>
        <Modal.Description>
          <CheckboxOption />
        </Modal.Description>
      </Modal>
    </div>
  )
}

export default Tool;
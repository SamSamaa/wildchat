import React, { useState } from 'react';
import { Icon, Modal } from 'semantic-ui-react';
import '../Parameters.css';
import './info.css';

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
        <div className="contributors">
          <Modal.Description>
            <p>Pour envoyer un message privé, vous pouvez cliquer sur le nom de la personne concernée !</p>
            <hr />
            <p>Application faite par:</p>
            <ul>
              <li><a href="https://github.com/AureliaRoumesy" target="_blank"><Icon name="github" /> - Aurélia Roumesy</a></li>
              <li><a href="https://github.com/Bmontbe" target="_blank"><Icon name="github" /> - Béatrice de Montbeillard</a></li>
              <li><a href="https://github.com/samsamaa" target="_blank"><Icon name="github" /> - Sam Adib Ghiassi</a></li>
              <li><a href="https://github.com/dhmjulien" target="_blank"><Icon name="github" /> - Julien Duhem</a></li>
            </ul>
          </Modal.Description>
        </div>
      </Modal>
    </div>
  )
}

export default Info;
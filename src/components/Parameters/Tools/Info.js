import React, {Component} from 'react';
import { Icon, Modal } from 'semantic-ui-react';
import '../Parameters.css';

class Info extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Icon className='iconHover' onClick={this.show('blurring')} name='info circle' size='big' />
       
        <Modal  dimmer={dimmer} open={open} onClose={this.close} className='modalMenu'>
          <Modal.Header>Informations</Modal.Header>
            <Modal.Description>
              <p>
                Application fait par: .......
              </p>
              
            </Modal.Description>
        </Modal>
      </div>
    )
  }
}

export default Info;
import React, {Component} from 'react';
import { Icon, Modal  } from 'semantic-ui-react';
import CheckboxOption from './Option/CheckboxOption';
import '../Parameters.css';

class Tool extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Icon className='iconHover' onClick={this.show('blurring')} name='cog' size='big' />
       
        <Modal size='tiny' dimmer={dimmer} open={open} onClose={this.close} className='modalMenu'>
          <Modal.Header>Options</Modal.Header>
            <Modal.Description>
              <CheckboxOption />
            </Modal.Description>
        </Modal>
      </div>
    )
  }
}


export default Tool;
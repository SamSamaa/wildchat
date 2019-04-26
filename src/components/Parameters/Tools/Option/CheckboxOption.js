import React from 'react';
import { Icon, Checkbox, List } from 'semantic-ui-react';
import './Checkbox.css';
import '../../../../App.css';

function CheckboxOption(props) {
  return (
    <List className='list'>
      <List.Item className='listTime' as='a'>
        <Icon name='time' />
        <List.Content>
          <List.Header>Heure des messages</List.Header>
          <List.Description>
            <Checkbox className='checkbox' toggle onClick={props.toggleDate} checked={props.showDate} />
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item className='listColor' as='a'>
        <Icon name='theme' />
        <List.Content>
          <List.Header>Thème</List.Header>
          <List.Description>
          <Icon className="redIcon" name="stop" size='large'  title="Red" onClick={props.clickColorRed} />
          <Icon className="greenIcon" name="stop" size='large' title="Green" onClick={props.clickColorGreen} />
          <Icon className="violetIcon" name="stop" size='large' title="Waycocool" onClick={props.clickColorViolet} />
          <Icon className="greyIcon" name="stop" size='large' title="Grey" onClick={props.clickColorGrey} />
          <Icon className="blueIcon" name="stop" size='large' title="Blue" onClick={props.clickColorBlue} />
          <Icon className="nightIcon" name="moon" size='large' title="Night Mode" onClick={props.clickColorNight} />
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
      </List.Item>
    </List>
  )
}

export default CheckboxOption;

import React,{ useState } from 'react'
import { Icon, Checkbox, List } from 'semantic-ui-react'
import Client from '../../../../Client';
import './Checkbox.css';

function CheckboxOption(props) {
  return (
    <List className='list'>
      <List.Item className='listTime' as='a'>
        <Icon name='time' />
        <List.Content>
          <List.Header>Heure des messages</List.Header>
          <List.Description>
            <Checkbox className='checkbox' onClick={props.toggleDate} toggle />
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item className='listColor' as='a'>
        <Icon name='theme' />
        <List.Content>
          <List.Header>Thème</List.Header>
          <List.Description></List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
      </List.Item>
    </List>
  )
}

export default CheckboxOption;

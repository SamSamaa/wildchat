import React, { useEffect } from 'react';
import UserMsg from '../UserMsg/UserMsg';
import { List } from 'semantic-ui-react';
import './Feed.css';

function Feed() {

  useEffect(() => {
    document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <List className="Feed">
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <List.Item><UserMsg /></List.Item>
      <div id='bottom'></div>
    </List>
  )
}

export default Feed;
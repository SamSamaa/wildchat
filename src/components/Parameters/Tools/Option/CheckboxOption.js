import React, { useContext } from 'react';
import { Icon, Checkbox, List } from 'semantic-ui-react';
import { ShowDateCtx, SelectedColorCtx } from '../../../../App';
import './Checkbox.css';
import '../../../../App.css';

function CheckboxOption() {

  const [showDate, setShowDate] = useContext(ShowDateCtx);
  const [selectedColor, setSelectedColor] = useContext(SelectedColorCtx);

  return (
    <List className='list'>
      <List.Item className='listTime' as='a'>
        <Icon name='time' />
        <List.Content>
          <List.Header>Heure des messages</List.Header>
          <List.Description>
            <Checkbox toggle onClick={() => setShowDate(!showDate)} checked={showDate} />
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item className='listColor' as='a'>
        <Icon name='theme' />
        <List.Content>
          <List.Header>Thème</List.Header>
          <List.Description>
          <Icon className="redIcon" name="stop" size='large'  title="Red" onClick={() => setSelectedColor("red")} />
          <Icon className="greenIcon" name="stop" size='large' title="Green" onClick={() => setSelectedColor("green")} />
          <Icon className="violetIcon" name="stop" size='large' title="Waycocool" onClick={() => setSelectedColor("")} />
          <Icon className="greyIcon" name="stop" size='large' title="Grey" onClick={() => setSelectedColor("grey")} />
          <Icon className="blueIcon" name="stop" size='large' title="Blue" onClick={() => setSelectedColor("blue")} />
          <Icon className="nightIcon" name="moon" size='large' title="Night Mode" onClick={() => setSelectedColor("night")} />
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
      </List.Item>
    </List>
  )
}

export default CheckboxOption;

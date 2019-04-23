import React from 'react'; //mise en forme message - enfant tout en bas
import moment from 'moment';
import 'moment/locale/fr';
import ReactMarkdown from 'react-markdown';

import './Msg.css';

moment.locale('fr');

function Msg(props) {
  return (
    <span className='mssg'>
      <ReactMarkdown className='markdown' source={props.message}/>
      {
        props.showDate ?
        <span className='date'>{moment(props.date).format('L - LT')}</span> :
        <span></span>
      }
    </span>
  )
}

export default Msg;
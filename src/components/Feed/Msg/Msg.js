import React from 'react'; //mise en forme message - enfant tout en bas
import moment from 'moment';
import 'moment/locale/fr';
import './Msg.css';

moment.locale('fr');

function Msg(props) {
  return (
    <span className='mssg'>{props.message}<br/><span className='date'>{moment(props.date).format('L - LT')}</span></span>
  )
}

export default Msg;
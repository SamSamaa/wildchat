import React, { useContext } from 'react'; //mise en forme message - enfant tout en bas
import moment from 'moment';
import { ShowDateCtx } from '../../../App';
import 'moment/locale/fr';
import ReactMarkdown from 'react-markdown';
import './Msg.css';

moment.locale('fr');

function Msg({message}) {

  const [showDate, setShowDate] = useContext(ShowDateCtx);
  
  return (
    <div className='mssgContainer'>
      <div className='mssg'>
        <ReactMarkdown className='markdown' source={message.message} />
        {
          showDate ?
            <span className='date'>{moment(message.date).format('L - LT')}</span> :
            <span></span>
        }
      </div>
    </div>
  )
}

export default Msg;
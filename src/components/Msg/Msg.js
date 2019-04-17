import React from 'react';
import ReactMarkdown from 'react-markdown';

//props serve to receive data from parent component
function Msg(props) {
  return (
    // we receive props.message from UserMsg
    <span><ReactMarkdown source={props.message}/></span>
  )
}

export default Msg;
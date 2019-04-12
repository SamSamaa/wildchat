import React from 'react';

//props serve to receive data from parent component
function Msg(props) {
  return (
    // we receive props.message from UserMsg
    <span>{props.message}</span>
  )
}

export default Msg;
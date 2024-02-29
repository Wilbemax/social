import React from 'react';
import c from './inputNewMessadge.module.css';
import { IoPaperPlane } from 'react-icons/io5';

export const InputNewMessadge = (props) => {
  debugger;
  let newMessageElement = React.createRef();

  let addMessage = () => {
    debugger
    props.addMessage()
  };

  let onMessageChange = () => {
    debugger;
    let text = newMessageElement.current.value;
    props.updateNewMessage(text)
  };

  return (
    <>
      <input
        className={c.input}
        ref={newMessageElement}
        onChange={onMessageChange}
        value={props.newMessageText}
        placeholder="Напишите сообщение..."
      />
      <button onClick={addMessage} className={c.button}>
        <IoPaperPlane className={c.icon} />
      </button>
    </>
  );
};

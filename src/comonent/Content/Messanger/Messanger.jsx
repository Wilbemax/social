import React from 'react';
import c from './messanger.module.css';
import { Messadge } from './Message/Message';
import { Person } from './Person/Person';
import cx from 'classnames';
import { InputNewMessadge } from './InputNewMessage/InputNewMessage';

const Messanger = (props) => {
  debugger;
  let userElement = props.state.MessegePage.UsersData.map((name) => (
    <Person id={name.id} name={name.name} />
  ));
  let usersMessadge = props.state.MessegePage.UsersMessages.map((message) => (
    <Messadge name={message.name} text={message.text} />
  ));

  return (
    <div className="content">
      <div className={c.messanger_wrap}>
        <div className={cx(c.users, c.owerflow)}>{userElement}</div>
        <div className={c.dialogues} id="chat-feed">
          <div className={cx(c.dialogue, c.owerflowMessage)}>{usersMessadge}</div>
          <InputNewMessadge
            updateNewMessage={props.updateNewMessage}
            addMessage={props.addMessage}
            newMessageText={props.state.MessegePage.newMessageText}
          />
        </div>
      </div>
    </div>
  );
};

export default Messanger;

import React from 'react';
import cx from 'classnames';
import { FiCheck } from 'react-icons/fi';
import c from './message.module.css';

export const Messadge = (props) => {
  return (
    <div className={cx("messages", props.fWho)}>
      <div className={c.message_header}>
        <img
          className={c.ava}
          src="https://pp.userapi.com/ubVSXOsVEBA4bo9aacqEg43y0904obNaa7JxwQ/NXzOufaESow.jpg"
          alt=""
        />
        <span className={c.name}>
          {props.name}
          <FiCheck className={c.icon} />
        </span>
      </div>
      <div className={c.buble}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

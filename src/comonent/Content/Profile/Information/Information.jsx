import React from 'react';
import c from './information.module.css';
import { FiCheck } from 'react-icons/fi';

export const Information = (props) => {
  
  return (
    <div className={c.inf}>
      <img
        className={c.ava}
        src="https://pp.userapi.com/ubVSXOsVEBA4bo9aacqEg43y0904obNaa7JxwQ/NXzOufaESow.jpg"
        alt=""
      />
      <div className={c.inf__word}>
        <h3 className={c.name}>
          {props.FirstName} {props.LastName} <FiCheck className={c.icon} />
        </h3>
        <span className={c.status}>{props.Status}</span>
      </div>
    </div>
  );
};

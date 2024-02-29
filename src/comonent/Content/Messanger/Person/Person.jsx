import React from 'react';
import {Link} from 'react-router-dom';
import c from './person.module.css';

export const Person = (props) => {
  let path = '/dialog' + props.id;

  return (
    <Link to={path} className={c.user}>
      {props.name}
    </Link>
  );
};

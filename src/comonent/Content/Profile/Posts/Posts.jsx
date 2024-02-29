import React from 'react';
import c from './posts.module.css';
import { FiCheck } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';

export const Posts = (props) => {
  // debugger
  return (
    <div className={c.post}>
      <div className={c.post_header}>
        <img
          className={c.post_ava}
          src="https://pp.userapi.com/ubVSXOsVEBA4bo9aacqEg43y0904obNaa7JxwQ/NXzOufaESow.jpg"
          alt=""
        />
        <div>
          <h3 className={c.post_name}>
            {props.FirstName} {props.LastName} <FiCheck className={c.post_icon} />
          </h3>
          <p className={c.post_time}>{props.showTime} </p>
        </div>
      </div>
      <div className={c.post_text}>
        <p>{props.PostText} </p>
      </div>
      <div className={c.reaction}>
        <div>
          <FaHeart className={c.likes} /> <span className={c.reaction_text}>{props.Likes} </span>
        </div>
        <div>
          <AiOutlineEye className={c.eye} />{' '}
          <span className={c.reaction_text}>{props.Reviews} </span>
        </div>
      </div>
    </div>
  );
};

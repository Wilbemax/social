import React from 'react';
import c from './wnew.module.css';


 export const Wnew = (props) => {
  debugger;
  let newPostElement = React.createRef();

  let addPosts = () => {
    props.addPost()
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  };

  return (
    <>
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!добавить frame motion!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <input
        className={c.input_post}
        ref={newPostElement}
        onChange={onPostChange}
        value={props.newPostText}
        placeholder="Что у вас нового?"
      />
      <button onClick={addPosts} className={c.add_but}>
        Опубликовать
      </button>
    </>
  );
};

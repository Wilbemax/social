import React from 'react';
import c from './profile.module.css';
import { Information } from './Information/Information';
import { Wnew } from './Wnew/Wnew';
import { Posts } from './Posts/Posts';

const Profile = (props) => {
  debugger;

  let informationUser = props.state.ProfilePage.InformationData.map((user) => (
    <Information FirstName={user.firstName} LastName={user.lastName} Status={user.status} />
  ));

  let infirmationPost = props.state.ProfilePage.PostData.map((post) => (
    <Posts
      FirstName={post.firstName}
      LastName={post.lastName}
      showTime={post.showTime}
      PostText={post.postText}
      Likes={post.likes}
      Reviews={post.reviews}
    />
  ));

  return (
    <div className="content owerflow">
      <div>
        <img
          className={c.cover}
          src="https://avatars.mds.yandex.net/i?id=c0ea0d82a19f930f7a2cbc0464f1cdacc2dfade6-8348537-images-thumbs&n=13"
          alt=""
        />
      </div>
      <div className="content_in">
        {informationUser}
        <div className="content_in-post">
          <p className={c.hed_post}>Все записи</p>
          <Wnew
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost}
            newPostText={props.state.ProfilePage.newPostText}
          />
          <div className={c.posts}>{infirmationPost}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

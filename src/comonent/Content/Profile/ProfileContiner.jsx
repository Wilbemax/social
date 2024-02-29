import React from 'react';
import Profile from './Profile';
import { addPostActionCreator,updateNewPostTextActionCreator } from '../../../redux/profile-reduser';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  debugger
  return{
    state: state.ProfilePage,
    newPostText: state.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  debugger
  return{
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      debugger
      let action = addPostActionCreator()
      dispatch(action);
    }
  }
}

const ProfileContiner = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContiner;

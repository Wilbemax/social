import React from 'react';
import Messanger from './Messanger';
import {
  addMassegeActionCreator,
  updateNewMessageTextActionCreator,
} from '../../../redux/diolog-reduser';
import { connect } from 'react-redux';





let mapStateToProps = (state) => {
  debugger
  return{
    newMessageText: state.MessegePage.newMessageText,
    state: state.MessegePage
  }
}
let mapDispatchToProps = (dispatch) => {
  debugger
  return{
    updateNewMessage: (text) =>{
      dispatch(updateNewMessageTextActionCreator(text))
    },
    addMessage: () =>{
      dispatch(addMassegeActionCreator())
    }
  }
}


const MessangerContiner = connect(mapStateToProps, mapDispatchToProps)(Messanger)

export default MessangerContiner;

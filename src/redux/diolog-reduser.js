const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initializations = {
  MessegePage: {
    UsersData: [
      { id: 1, name: 'User Pupkin1' },
      { id: 2, name: 'User Pupkin2' },
      { id: 3, name: 'User Pupkin1' },
      { id: 4, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 5, name: 'User Pupkin1' },
      { id: 6, name: 'User Pupkin1' },
    ],
    UsersMessages: [
      { id: '1', name: 'Maxim Kolomietc', text: 'test1', fromWho: 'you' },
      { id: '2', name: 'Maxim ', text: 'test2', fromWho: 'you' },
      { id: '3', name: 'Maxim ', text: 'test2', fromWho: 'you' },
      { id: '4', name: 'Maxim ', text: 'test2', fromWho: 'you' },
      { id: '5', name: 'Maxim ', text: 'test2', fromWho: 'you' },
      { id: '6', name: 'Maxim ', text: 'test2', fromWho: 'you' },
      { id: '7', name: 'Maxim ', text: 'test2', fromWho: 'you' },
      { id: '8', name: 'Maxim ', text: 'test2', fromWho: 'you' },
      {
        id: '9',
        name: 'Maxim Kolomietc',
        text: 'testdhjfbghdfgj',
      },
    ],
    newMessageText: '',
  },
};

let diologReduser = (state = initializations, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:{
     
    let stateCopy = {...state}

      stateCopy.MessegePage.newMessageText = action.newMessageValue;



      
      return stateCopy;
    }
    case SEND_MESSAGE:{
      

      let stateCopy = {...state}
      stateCopy.MessegePage = {...state.MessegePage}
      stateCopy.MessegePage.UsersMessages = [...state.MessegePage.UsersMessages]

      let inputNewMessagText = stateCopy.MessegePage.newMessageText;

      let newMessage = {
        id: 10,
        name: 'Максим',
        text: inputNewMessagText,
        fWho: 'you',
      };

      let emptyInputField = () => {
        if (inputNewMessagText === '') {
          alert('Нельзя отправить пустое сообщение');
        } else {
          stateCopy.MessegePage.UsersMessages.push(newMessage);
        }
      };

      emptyInputField();
      stateCopy.MessegePage.newMessageText = '';
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMassegeActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageValue: text,
  };
};

export default diologReduser;

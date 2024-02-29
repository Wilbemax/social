import diologReduser from './diolog-reduser';
import profileReduser from './profile-reduser';

let store = {
  _state: {
    ProfilePage: {
      InformationData: [{ firstName: 'Максим', lastName: 'Коломиец', status: 'Online' }],
      PostData: [
        {
          id: 1,
          firstName: 'Максим',
          lastName: 'Коломиец',
          status: 'Online',
          showTime: 'сегодня в 0:00',
          postText: 'First post',
          likes: '1М',
          reviews: '2.5М',
        },
        {
          id: 2,
          firstName: 'Максим',
          lastName: 'Коломиец',
          status: 'Online',
          showTime: 'сегодня в 0:00',
          postText: 'Второй post',
          likes: '5М',
          reviews: '100М',
        },
      ],
      newPostText: '',
      newShowTime: '',
      monthNames: [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августв',
        'Сентебря',
        'Октября',
        'Ноября',
        'Декобря',
      ],
    },
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
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer прочти документацию, посмотри про OOP
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State was changed');
  },

  dispatch(action) {
    profileReduser(this._state.ProfilePage, action);
    diologReduser(this._state.MessegePage, action);
    
    this._callSubscriber(this._state);
  },
};
export default store;

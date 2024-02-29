const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initializations = {
  ProfilePage: {
    InformationData: [
      { firstName: "Максим", lastName: "Коломиец", status: "Online" },
    ],
    PostData: [
      {
        id: 1,
        firstName: "Максим",
        lastName: "Коломиец",
        status: "Online",
        showTime: "сегодня в 0:00",
        postText: "First post",
        likes: "1М",
        reviews: "2.5М",
      },
      {
        id: 2,
        firstName: "Максим",
        lastName: "Коломиец",
        status: "Online",
        showTime: "сегодня в 0:00",
        postText: "Второй post",
        likes: "5М",
        reviews: "100М",
      },
    ],
    newPostText: "",
    newShowTime: "",
    monthNames: [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августв",
      "Сентебря",
      "Октября",
      "Ноября",
      "Декобря",
    ],
  },
};

debugger;
let profileReduser = (state = initializations, action) => {
  switch (action.type) {
    case ADD_POST: {
      debugger;
      state.ProfilePage.newShowTime = action.newTime;
      let postInputText = state.ProfilePage.newPostText;

      let stateCopy = { ...state };
      stateCopy.ProfilePage = { ...state.ProfilePage };
      stateCopy.ProfilePage.PostData = [...state.ProfilePage.PostData];

      const date = new Date();
      const showTime = `${date.getDate()} ${
        state.ProfilePage.monthNames[date.getMonth()]
      } в ${date.getHours()}:${date.getMinutes()}`;

      let newPost = {
        id: 5,
        firstName: "Максим",
        lastName: "Коломиец",
        showTime: showTime,
        postText: postInputText,
        likes: 0,
        reviews: 0,
      };

      let emptyInputField = () => {
        if (postInputText === "") {
          alert("Нельзя опубликовать пустой пост");
        } else {
          stateCopy.ProfilePage.PostData.push(newPost);
        }
      };

      emptyInputField();
      stateCopy.ProfilePage.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.ProfilePage.newPostText = action.newText;

      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (showTime) => {
  return {
    type: ADD_POST,
    newTime: showTime,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReduser;

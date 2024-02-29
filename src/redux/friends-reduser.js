const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initializations = {
  users: [],
};

debugger;
let friendsReduser = (state = initializations, action) => {
  switch (action.type) {
    case FOLLOW:
      debugger
      return {
        
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            debugger
            return { ...user, follow: false};
          }
          
          return user;
        }),
      };

    case UNFOLLOW:
      debugger
      return {
        
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, follow: true };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (userID) => {
  return {
    type: FOLLOW,
    userID,
  };
};
export const unFollowAC = (userID) => {
  return {
    type: UNFOLLOW,
    userID,
  };
};
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default friendsReduser;

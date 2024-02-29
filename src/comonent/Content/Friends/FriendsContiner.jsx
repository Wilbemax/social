import { connect } from "react-redux";
import {
  unFollowAC,
  followAC,
  setUsersAC,
} from "../../../redux/friends-reduser";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  return {
    users: state.FriendsPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      debugger
      dispatch(followAC(userID));
    },
    unFollow: (userID) => {
      debugger
      dispatch(unFollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);

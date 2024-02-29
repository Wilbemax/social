import { combineReducers, createStore } from "redux";
import diologReduser from "./diolog-reduser";
import friendsReduser from "./friends-reduser";
import profileReduser from "./profile-reduser";

let redusers = combineReducers({
    ProfilePage: profileReduser,
    MessegePage: diologReduser,
    FriendsPage: friendsReduser
})

let store = createStore(redusers)
export default store